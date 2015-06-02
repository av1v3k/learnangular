/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('my-app', []);
app.controller('emailController', function($scope){
    $scope.nameArray = ['Vivek', 'Ganesh', 'Hulk'];
    $scope.tableValues = [
        {'name':'Bandipur National Park', 'area':'200000 sq.ft'},
        {'name':'Nagarhole National Park', 'area':'340000 sq.ft'},
        {'name':'Bhadra Wildlife Santuary', 'area':'440000 sq.ft'},
        {'name':'Ranganathittu Bird Santuary', 'area':'140000 sq.ft'}];
    $scope.nameType = function(){
      return $scope.name;  
    };
});


