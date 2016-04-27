import style from './style.scss';

import React, { Component } from 'react';

export default class HeaderBottom extends Component {
  render() {
    return (
      <div class="header-bottom">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6">
                      <div class="logo">
                          <a ui-sref="home"><img src="images/home/logo.png" alt="" /></a>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <searchbox></searchbox>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}