import style from './style.scss';

import React, { Component } from 'react';

import CurrencySelector from "../CurrencySelector/CurrencySelector";
import Cart from "../Cart/Cart";


export default class HeaderTop extends Component {
  render() {
    return (
      <div class="header-top">
          <div class="container">
              <div class="row">
                  <div class="col-sm-2">
                      <CurrencySelector/>
                  </div>
                  <div class="col-sm-10">
                      <div class="shop-menu pull-right">
                          <ul class="nav navbar-nav">
                              <li><a href="#"><i class="fa fa-cog"></i> Register</a></li>
                              <li><a href="#"><i class="fa fa-power-off"></i> Log in</a></li>
                              <li>
                                  <a href="#" class="ico-wishlist">
                                      <span class="cart-label"><i class="fa fa-star"></i> Wishlist</span>
                                      <span class="wishlist-qty">(0)</span>
                                  </a>
                              </li>
                              <li id="topcartlink">
                                  <a ui-sref="shoppingCart" class="ico-cart">
                                      <span class="cart-label"><i class="fa fa-shopping-cart"></i> Shopping cart</span>
                                      <Cart/>
                                      <i class="fa fa-angle-down"></i>
                                  </a>                       
                              </li>                      
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}