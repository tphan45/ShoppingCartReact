import React, { Component } from 'react';
import { Link } from "react-router";

import Footer from "../../components/Footer/component.js";
import Header from "../../components/Header/component.js";

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
        <Header />
        <h1> This is body hehe</h1>
        {this.props.children}
        <Link to="archives"> archives </Link>
        <Link to="settings"> settings </Link>
        <button onClick={this.navigate.bind(this)}>featured</button>
        <Footer />
      </div>
    );
  }
}