/*
* @Author: xiangnick
* @Date:   2017-05-09 11:17:44
* @Last Modified by:   xiangnick
* @Last Modified time: 2017-05-09 16:44:11
*/

angular.module('Controllers',[])
.controller('NavController',['$scope',function($scope){
	console.log("启动了");
	// 导航数据
	$scope.navs = [
		{url: '#/', text: '今日一刻', icon: 'icon-home'},
		{url: '#/older', text: '往期内容', icon: 'icon-file-empty'},
		{url: '#/author', text: '热门作者', icon: 'icon-pencil'},
		{url: '#/category', text: '栏目浏览', icon: 'icon-menu'},
		{url: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
		{url: '#/settings', text: '设置', icon: 'icon-cog'}
	];
}])