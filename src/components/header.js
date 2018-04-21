import React, { Component } from 'react';
import topLogo from '../images/toplogo.png';
import '../sass/header.scss';
import Navs from './nav';

const refreshPage = () => {
  window.location.reload();
};

class Headers extends Component {

  constructor(props) {
    super(props);
    this.showNav = this.showNav.bind(this);
    this.state = {
      showAlert: false,
    };
  }
  showNav(obj) {
    if (!obj) {
      document.getElementById('nav').className = 'fadeOutLeft animated';
      setTimeout(() => {
        document.getElementById('nav').style.opacity = 1;
        document.getElementById('nav').className = '';
        this.setState({ showAlert: false });
      }, 500);
    } else {
      this.setState({ showAlert: true });
    }
  }

  render() {
    const { showAlert } = this.state;
    return (
      <div className="top">
        { showAlert && <Navs showStates={this.showNav} showAlert={showAlert} /> }
        <img src={topLogo} alt="" />
        <i className="icon-refresh icons" onClick={refreshPage} />
        <i className="icon-list icons" onClick={() => this.showNav(true)} />
      </div>
    );
  }
}

export default Headers;
