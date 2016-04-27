import style from './style.scss';

import React, { Component } from 'react';

export default class FooterWidget extends Component {
  render(){
    return(
      <div class="footer-widget">
          <div class="container">
              <div class="row">
                  <div class="col-sm-3">
                      <div class="single-widget">
                          <h2>Information</h2>
                          <ul class="nav nav-pills nav-stacked">
                              <li><a href="#">Sitemap</a></li>
                              <li><a href="#">Shipping & returns</a></li>
                              <li><a href="#">Privacy notice</a></li>
                              <li><a href="#">Conditions of Use</a></li>
                              <li><a href="#">About us</a></li>
                              <li><a href="#">Contact us</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-3">
                      <div class="single-widget">
                          <h2>Customer service</h2>
                          <ul class="nav nav-pills nav-stacked">
                              <li><a href="#">Search</a></li>
                              <li><a href="#">News</a></li>
                              <li><a href="#">Blog</a></li>
                              <li><a href="#">Recently viewed products</a></li>
                              <li><a href="#">Compare products list</a></li>
                              <li><a href="#">New products</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-3">
                      <div class="single-widget">
                          <h2>My account</h2>
                          <ul class="nav nav-pills nav-stacked">
                              <li><a href="#">My account</a></li>
                              <li><a href="#">Orders</a></li>
                              <li><a href="#">Addresses</a></li>
                              <li><a href="#">Shopping cart</a></li>
                              <li><a href="#">Wishlist</a></li>
                              <li><a href="#">Apply for vendor account</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-sm-3">
                      <div class="single-widget">
                          <h2>Newsletter</h2>
                          <form action="#" class="searchform">
                              <input type="text" placeholder="Enter your email here..." />
                              <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"> Subscribe</i></button>
                          </form>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    );
  }
}