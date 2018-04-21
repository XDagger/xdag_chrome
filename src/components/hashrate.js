import React, { Component } from 'react';
import axios from 'axios';

import Headers from './header';
import Loading from './loading';
import Tips from './tips';

import '../sass/public.scss';
import '../sass/hashrate.scss';

class Hashrate extends Component {

  constructor(props) {
    super(props);
    this.initData = this.initData.bind(this);
    this.state = {
      loading: true,
      blocks: null,
      mainBlocks: null,
      netHashrate: null,
      difficulty: null,
      difficulty_exact: null,
      supply: null,
      tipsBoxVisible: false,
    };
  }
  componentWillMount() {
    this.initData(this.cur);
  }
  initData() {
    axios.get('https://xdag.top/api/state')
      .then((response) => {
        const {
          blocks, mainBlocks, netHashrate, difficulty, difficulty_exact, supply,
        } = response.data;
        this.setState({ loading: false });
        this.setState({ blocks });
        this.setState({ mainBlocks });
        this.setState({ netHashrate });
        this.setState({ difficulty });
        this.setState({ difficulty_exact });
        this.setState({ supply });
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
      blocks,
      mainBlocks,
      netHashrate,
      difficulty,
      difficulty_exact,
      supply,
      loading,
      tipsBoxVisible,
    } = this.state;
    return (
      <div>
        { loading && <Loading />}
        { tipsBoxVisible && <Tips closeTipsBox={this.closeTipsBox} />}
        <div className="explorerTop">
          <Headers />
          <div className="top12">
            <div className="netHashrate">
              <div>NETHASHRATE</div>
              <div className="numH">
                <div>{netHashrate && netHashrate.split(' ')[0]}</div>
                <div className="unit">{netHashrate && 'TH/s'}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="explorerContent">
          <div className="hashrate">
            <ul>
              <li className="blocks">
                <div>
                  <i className="icon-layers icons" />
                </div>
                <div className="hashTag">blocks</div>
                <div className="hashCont">{blocks}</div>
              </li>
              <li className="main">
                <div>
                  <i className="icon-puzzle icons" />
                </div>
                <div className="hashTag">mainBlocks</div>
                <div className="hashCont">{mainBlocks}</div>
              </li>
              <li className="difficulty">
                <div>
                  <i className="icon-tag icons" />
                </div>
                <div className="hashTag">difficulty</div>
                <div className="hashCont diff">
                  {difficulty}
                  <div className="hashTips">{difficulty_exact}</div>
                </div>
              </li>
              <li className="supply">
                <div>
                  <i className="icon-present icons" />
                </div>
                <div className="hashTag">supply</div>
                <div className="hashCont">{supply && (supply.split(':')[1]).split(' ')[1]}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}


export default Hashrate;
