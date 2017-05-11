var Yike=angular.module("Yike",["ngRoute","Controllers"]);Yike.config(["$routeProvider",function(o){o.when("/today",{templateUrl:"./views/today.html",controller:"TodayController"}).when("/older",{templateUrl:"./views/older.html",controller:"OlderController"}).when("/author",{templateUrl:"./views/author.html",controller:"AuthorController"}).when("/category",{}).when("/favourite",{}).when("/settings",{}).otherwise({redirectTo:"/today"})}]),Yike.run(["$rootScope",function(o){o.collapsed=!1,o.toggle=function(){o.collapsed=!o.collapsed;var t=document.querySelectorAll(".navs dd");if(o.collapsed)for(var e=0;e<t.length;e++)t[e].style.transform="translate(0)",t[e].style.transitionDelay="0.2s",t[e].style.transitionDuration=.15*(e+1)+"s";else for(var l=t.length-1,r=l;r>0;r--)t[r].style.transform="translate(-100%)",t[r].style.transitionDelay="",t[r].style.transitionDuration=.15*(l-r)+"s"}}]),angular.module("Controllers",[]).controller("NavController",["$scope",function(o){console.log("启动了"),o.navs=[{url:"#/",text:"今日一刻",icon:"icon-home"},{url:"#/older",text:"往期内容",icon:"icon-file-empty"},{url:"#/author",text:"热门作者",icon:"icon-pencil"},{url:"#/category",text:"栏目浏览",icon:"icon-menu"},{url:"#/favourite",text:"我的喜欢",icon:"icon-heart"},{url:"#/settings",text:"设置",icon:"icon-cog"}]}]).controller("TodayController",["$scope","$http","$filter","$rootScope",function(o,t,e,l){var r=e("date")(new Date,"yyyy-MM-dd");l.loaded=!1,l.title="今日一刻",t({url:"./api/today.php",method:"get",params:{today:r}}).success(function(t){l.loaded=!0,o.data=t})}]).controller("OlderController",["$scope",function(o){}]).controller("AuthorController",["$scope","$http","$rootScope",function(o,t,e){e.title="热门作者",e.loaded=!1,t({url:"./api/author.php",method:"get"}).success(function(t){e.loaded=!0,o.rec=t.rec,o.all=t.all})}]);