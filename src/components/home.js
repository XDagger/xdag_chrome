import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import '../sass/public.scss';
import '../sass/index.scss';
import logo from '../images/logo_icon.png';
import logoTxt from '../images/logo_txt.png';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.submitData = this.submitData.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.state = {
      address: null,
      result: null,
    };
  }

  submitData() {
    this.setState({ result: this.state.address });
  }

  handlechange() {
    const vals = document.getElementById('address').value;
    this.setState({ address: vals });
  }

  render() {
    const { result } = this.state;

    if (result) {
      return <Redirect to={'/explorer/' + this.state.result} />;
    }

    return (
      <div className="bg">
        <div className="logo">
          <div><img src={logo} alt="" /></div>
          <div><img src={logoTxt} alt="" /></div>
        </div>
        <div className="addressInput">
          <div>
            <input
              type="text"
              placeholder="PLEASE INPUT ADDRESS"
              id="address"
              name="address"
              onChange={this.handlechange}
            />
          </div>
          <div>
            <button id="sub" onClick={this.submitData}>GO</button>
          </div>
        </div>
        <ul className="linkGroup">
          <li>
            <a href="http://xdag.io" target="_blank" rel="noreferrer noopener">
              <div><i className="icon-home icons" /></div>
              <div>OFFICIAL<br /> WEBSITE</div>
            </a>
          </li>
          <li>
            <Link to="/list" >
              <div><i className="icon-basket-loaded icons" /></div>
              <div>POOL<br /> LIST</div>
            </Link>
          </li>
          <li>
            <Link to="/hashrate" >
              <div><i className="icon-calculator icons" /></div>
              <div>NETWORK HASHRATE</div>
            </Link>
          </li>
          <li>
            自动更新
          </li>
        </ul>
      </div>
    );
  }

}

