
var app = angular.module('myApp',['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home',{
    	templateUrl:'view/home.html',//链接的地址
    	controller:'homeCtrl'
    })
    .when('/shopping-bag',{
    	templateUrl:'view/shopping-bag.html',
        controller:'shopping-bagCtrl'
    })
		//  社区
    .when('/community',{
    	templateUrl:'view/community.html',
        controller:'communityCtrl'
    })
    .when('/mine',{
    	templateUrl:'view/mine.html',
        controller:'mineCtrl'
    })
     .when('/mine/:id',{
    	templateUrl:'view/allOrderForm.html',
        controller:'mineCtrl'
    })
     //  社区评论详情页
    .when('/details',{
    	templateUrl:'tpl/details.html',
    	controller:'detailsCtrl'
    })
    .when('/cosme',{
    	templateUrl:'./tpl/cosmetic.html',
    })
    .when('/Car',{
    	templateUrl:'tpl/mine-shopCar.html',
        controller:'CarCtrl'
    })
    //品质狂欢季
    .when('/carnival',{
    	templateUrl:'tpl/carnival.html',
        controller:'CarnivalCtrl'
    })
		
    .otherwise({redirectTo:'/home'});
}]);

























