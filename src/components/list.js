import React, { Component } from 'react';
import axios from 'axios';
import Headers from './header';
import Loading from './loading';
import Tips from './tips';

import '../sass/public.scss';
import '../sass/list.scss';

class List extends Component {

  constructor(props) {
    super(props);
    this.closeTipsBox = this.closeTipsBox.bind(this);
    this.state = {
      loading: false,
      tipsBoxVisible: false,
      datas: [],
    };
  }
  componentWillMount() {
    this.initData();
  }
  initData() {
    this.setState({ loading: true });
    axios.get('https://raw.githubusercontent.com/XDagger/XDagger.github.io/master/_data/pool.yml')
      .then((response) => {
        this.setState({ loading: false });
        const brr = [];
        const arr = response.data.trim().replace(/\n/g, ',').split('- ');
        arr.shift();
        arr.map((a) => {
          const str = a.replace(/\: /g, '\"\:\"');
          const str2 = str.replace(/\,/g, '\"\,\"');
          const str3 = '{\"' + str2.replace(/ /g, '') + '\"}';
          const str4 = str3.replace(/\,\"\"\}/g, '\}');
          brr.push(JSON.parse(str4));
          return JSON.parse(str4);
        });
        this.setState({ datas: brr });
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
  render() {
    const {
      loading, tipsBoxVisible,
    } = this.state;
    return (
      <div>
        { loading && <Loading />}
        { tipsBoxVisible && <Tips closeTipsBox={this.closeTipsBox} />}
        <div className="listTop">
          <Headers />
          <div className="pool12">
            <div className="title">POOLS List</div>
            <div className="contribute">CONTRIBUTE TO THE FUND <strong>1%</strong></div>
            <div>You can use these approved known<br />pools listed below.</div>
          </div>
        </div>
        <div className="noshow" />
        <div className="list">
          {
            this.state.datas.map(d => (
              <dl key={d.ip}>
                <dt>{d.ip}</dt>
                <dd>
                  <ul className="btm">
                    <li className="input">{d.country}</li>
                    <li className="amount">{d.name}</li>
                    <li className="time"><a href={d.web} target="_blank">{d.webName}</a></li>
                  </ul>
                  <ul className="row">
                    <li className="purple"><strong>{d.p1st}%</strong> pool fee.</li>
                    <li className="black"><strong>{d.p2nd}%</strong> reward for miner who discovered a block</li>
                    <li className="dark"><strong>{d.p3rd}%</strong> reward for miner who contribute directly to the discover of a block</li>
                    <li className="blue"><strong>{d.p4th}%</strong> community fund fee.</li>
                  </ul>

                </dd>
              </dl>
            ))
          }
        </div>
      </div>
    );
  }
}

export default List;
