import style from '../../../scss/views/layout.scss';

import React, { Component } from 'react';
import { Link } from "react-router";

import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";
import FooterTop from "../../components/FooterTop/FooterTop";
import FooterWidget from "../../components/FooterWidget/FooterWidget";
import FooterBottom from "../../components/FooterBottom/FooterBottom";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Hi! Morning men",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  navigate(){
    this.props.history.replaceState(null, "/")
  }

  render() {
    return (
      <div>
        <header id="header">
            <HeaderTop/>
            <HeaderBottom/>
            <mynavigation></mynavigation>
        </header>

        <h1> This is body hehe</h1>
        {this.props.children}
        <Link to="archives"> archives </Link>
        <Link to="settings"> settings </Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
        
        <footer id="footer">
            <FooterTop/>
            <FooterWidget/>
            <FooterBottom/>
        </footer>
      </div>
    );
  }
}