import style from './style.scss';

import React, { Component } from 'react';

export default class FooterTop extends Component {
  render(){
    return(
      <div class="footer_top">
          <div class="container">
              <div class="row">
                  <div class="col-sm-6">
                      <div class="contactinfo">
                          <ul class="nav navbar-nav">
                              <li><a href="#"><i class="fa fa-phone"></i> +84 165 971 6960</a></li>
                              <li><a href="#"><i class="fa fa-envelope"></i> pttuan1994@gmail.com</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <div class="social-icons pull-right">
                          <ul class="nav navbar-nav">
                              <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                              <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                              <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                              <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                              <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}