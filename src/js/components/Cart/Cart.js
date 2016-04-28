// shoppingApp.directive("mycart", ['cartService', function (cart) {
//     cart.loadData();
//     return {
//         restrict: "E",
//         templateUrl: "js/components/cart/template.html",
//         controller: function ($scope) {
//             $scope.itemCount = cart.totalCount();
//             $scope.$on('UpdateCart', function () {
//                 $scope.itemCount = cart.totalCount();
//             });
            
//         }
//     }
// }]);


import style from './style.scss';

import React, { Component } from 'react';

export default class Cart extends Component {
  render(){
    return(
        <span class="cart-qty"> ({10}) </span>
    );
  }
}