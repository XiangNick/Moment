/*
* @Author: xiangnick
* @Date:   2017-05-09 10:39:11
* @Last Modified by:   xiangnick
* @Last Modified time: 2017-05-09 17:01:24
*/

var Yike = angular.module('Yike',['ngRoute','Controllers']);

Yike.run(['$rootScope',function($rootScope){

	$rootScope.collapsed = false;
	$rootScope.toggle = function(){

		$rootScope.collapsed = !$rootScope.collapsed;
		var navs = document.querySelectorAll(".navs dd");

		if($rootScope.collapsed){
			// console.log("打开了");
			for(var i = 0; i < navs.length; i++){
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDelay = '0.2s';
				navs[i].style.transitionDuration = (i + 1)*0.15 +'s';
			}
		}else{
			// console.log("关闭了");
			var len = navs.length - 1;
			for(var j = len; j > 0; j--){
				navs[j].style.transform = "translate(-100%)";
				navs[j].style.transitionDelay = "";
				navs[j].style.transitionDuration = (len - j) * 0.15 + "s";
			}


		}
	};
}]);