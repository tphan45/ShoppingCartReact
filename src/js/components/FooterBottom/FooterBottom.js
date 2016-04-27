import style from './style.scss';

import React, { Component } from 'react';

export default class FooterBottom extends Component {
  render(){
    return(
      <div class="footer-bottom">
          <div class="container">
              <div class="row">
                  <p class="pull-left">WFE Fresher Training Program - Final Project: Shopping cart.</p>
                  <p class="pull-right">Designed by <span><a target="_blank" href="https://www.facebook.com/pttuan1994">Phan Thanh Tuan</a></span></p>
              </div>
          </div>
      </div>
    );
  }
}