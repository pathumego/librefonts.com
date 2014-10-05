﻿/* 
* @Author: Bhargav Krishna
* @Date:   2014-08-30 00:29:17
* @Last Modified by:   Bhargav Krishna
* @Last Modified time: 2014-10-04 22:06:36
*/
'use strict';

angular.module('AwesomeHindiFont', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of demos
    $scope.demos = [
	    {src : "demos/icecream.html"},
	    {src : "demos/icecream2.html"},
        {src : "demos/swan.html"},
        {src : "demos/interconnect.html"},
        {src : "demos/gnat-bull.html"},
        {src : "demos/oak.html"},
        {src : "demos/rivers.html"},
        {src : "demos/the-fox-and-the-grapes.html"},
        {src : "demos/two-bags.html"},
        {src : "demos/moon-mother.html"},
        {src : "demos/eleven.html"},
        {src : "demos/rabbit.html"},
        {src : "demos/bull-jackel.html"},
        {src : "demos/gajraj.html"},
        {src : "demos/drums.html"},
        {src : "demos/stupid-ass.html"},
        {src : "demos/copying.html"},
        {src : "demos/talkative-turtle.html"},
        {src : "demos/enemy-advice.html"},
        {src : "demos/fools-learn.html"},
        {src : "demos/golu-molu.html"},
        {src : "demos/lion-jackel.html"},
        {src : "demos/guests.html"},
        {src : "demos/jackel.html"},
        {src : "demos/quotes/Jean.html"},
        {src : "demos/quotes/Gertrude.html"},
        {src : "demos/quotes/Henry.html"},
        {src : "demos/quotes/Horace.html"},
        {src : "demos/quotes/James.html"},
        {src : "demos/quotes/Lucius.html"},
        {src : "demos/quotes/Marshall.html"},
        {src : "demos/quotes/Michelangelo.html"},
        {src : "demos/quotes/Oscar.html"},        
        {src : "demos/quotes/Isaac.html"},
        {src : "demos/quotes/Scott.html"},
        {src : "demos/quotes/Carroll.html"},
        {src : "demos/quotes/Ralph.html"},
        {src : "demos/quotes/Jackson.html"},
        {src : "demos/quotes/John.html"},
        {src : "demos/quotes/Marc.html"},
        {src : "demos/quotes/Henri.html"},
        {src : "demos/quotes/Ludwig.html"},
        {src : "demos/quotes/eorgia.html"}        
    ];

    // initial demo index
    $scope._Index = 0;

    // if a current demo is the same as requested demo
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev demo
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.demos.length - 1;
    };

    // show next demo
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.demos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain demo
    $scope.showDemo = function (index) {
        $scope._Index = index;
    };
});

$(document).ready(function() {

	$(function() {
	  $(".fit").fitText(8);
	});

	// the fox and the grapes scripts
	var width = $(window).width() - 250;
	var height = $(window).height() - 250;

	function run() {
		var top = Math.random() * height;
		var left = Math.random() * width;
		$('#grapes').css('top', top + 'px').css('left', left + 'px');
		$('#grapes').removeClass('shake');
	}
	$('#grapes').mouseover(run);
	// end the fox and the grapes scripts

});

