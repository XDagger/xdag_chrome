import React, { Component } from 'react';
import axios from 'axios';
import Page from './page';

import Headers from './header';
import Loading from './loading';
import Tips from './tips';

import '../sass/public.scss';
import '../sass/explorer.scss';


class Explorer extends Component {

  constructor(props) {
    super(props);
    this.initData = this.initData.bind(this);
    this.pageClick = this.pageClick.bind(this);
    this.goPrevClick = this.goPrevClick.bind(this);
    this.goNext = this.goNext.bind(this);
    this.closeTipsBox = this.closeTipsBox.bind(this);
    this.state = {
      loading: null,
      balance: null,
      time: null,
      difficulty: null,
      direction: null,
      addressTP: null,
      amount: null,
      datas: [],
      cur: 1,
      total: null,
      tipsBoxVisible: false,
    };
  }
  componentWillMount() {
    this.initData(this.cur);
  }
  initData(page) {
    this.setState({ loading: true });
    axios.get('https://xdag.top/api/blocks', {
      params: {
        address: this.props.match.params.address,
        page,
        per_page: 10,
      },
    })
      .then((response) => {
        this.setState({ loading: false });
        const {
          balance, time, difficulty, transaction, address,
        } = response.data;
        if (parseInt(this.state.cur, 10) === 1) {
          this.setState({ balance });
          this.setState({ time });
          this.setState({ difficulty });
          this.setState({ direction: transaction.data[0].direction });
          this.setState({ addressTP: transaction.data[0].address });
          this.setState({ amount: transaction.data[0].amount });
        }
        this.setState({ datas: address.data });
        this.setState({ cur: address.current_page });
        this.setState({ total: address.last_page });
      })
      .catch(() => {
        this.setState({ loading: false });
        this.setState({ tipsBoxVisible: true });
      });
  }
  closeTipsBox() {
    this.setState({
      tipsBoxVisible: false,
    });
  }
  pageClick(pageNum) {
    const num = parseInt(pageNum, 10);
    if (num !== this.state.cur) {
      this.setState({ cur: num }, () => {
        this.initData(this.state.cur);
      });
    }

  }
  goPrevClick() {
    const { cur } = this.state;
    if (cur > 1) {
      this.pageClick(cur - 1);
    }
  }

  goNext() {
    const cur = parseInt(this.state.cur, 10);
    if (cur < this.state.total) {
      this.pageClick(cur + 1);
    }
  }
  render() {
    const {
      balance,
      time,
      difficulty,
      direction,
      addressTP,
      amount,
      datas,
      cur,
      total,
      loading,
      tipsBoxVisible,
    } = this.state;
    return (
      <div>
        { loading && <Loading />}
        { tipsBoxVisible && <Tips closeTipsBox={this.closeTipsBox} />}
        <div className="explorerTop2">
          <Headers />
          <div className="top12">
            <div className="balance">BALANCE</div>
            <div className="num">{balance}</div>
            <div className="discription">TIME: {time}</div>
            <div className="discription">DIFFICULTY: {difficulty}</div>
          </div>
        </div>
        <div className="explorerContent">
          <div className="transaction">
            <div className="title">Block as transaction</div>
            <ul>
              <li>Direction: {direction}</li>
              <li>Address: {addressTP}</li>
              <li>Amount: {amount}</li>
            </ul>
          </div>
          <div className="address">
            <div className="title">
              Block as address
              <div className="rhtTips">
                <div><span className="darkblue" /><span className="blue" /> DIRECTION</div>
                <div><span className="amoutbg" /> AMOUNT</div>
              </div>
            </div>
            {
              datas.map(d => (
                <dl key={d.address + d.time + d.amount}>
                  <dt><a href={'http://explorer.xdag.io/block/' + d.address} target="_blank" >{d.address}</a></dt>
                  <dd>
                    <ul>
                      <li className="input">{d.direction}</li>
                      <li className="amount">{d.amount}</li>
                      <li className="time">{d.time}</li>
                    </ul>
                  </dd>
                </dl>
              ))
            }
          </div>
          <Page
            current={cur}
            totalPage={total}
            pageClick={this.pageClick}
            goPrev={this.goPrevClick}
            goNext={this.goNext}
          />
        </div>
      </div>
    );
  }

}

export default Explorer;
