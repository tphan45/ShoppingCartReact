// shoppingApp.directive("searchbox", ['$location','filterService', function ($location,filter) {
//     return {
//         restrict: "E",
//         templateUrl: "js/components/search-box/template.html",
//         controller: function ($scope) {
//             $scope.resetSearch = function () {
//                 $scope.searchKey = "";
//             }
//             $scope.updateSearch = function () {
//                 filter.setKey($scope.searchKey);
//                 $location.path("/product/Search");
                
//             }
//         }
//     }
// }]);


import style from './style.scss';

import React, { Component } from 'react';

export default class SearchBox extends Component {
  render(){
    return(
        <div class="search_box pull-right">
            <input type="text" ng-model="searchKey" ng-change="updateSearch()" ng-click="resetSearch()" placeholder="Search store" />
        </div>
    );
  }
}