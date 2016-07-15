
angular.module('APP',['ui.router'])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/first");
            $stateProvider
            .state('first',{
                url: "/first",
                templateUrl: "partials/first.html"
            })
//            .state('gc-zjrb',{
//                url: "/gc/zjrb",
//                templateUrl: "/touch/gcrb/yx_zjgc.jsp?limit=10"
//            })
            .state('gc-zjrb',{
                url: "/gc/zjrb",
                templateUrl: "partials/s01-gc/zjrb.html"
            })
            
            .state('gc-zqrb',{
                url:"/gc/zqrb",
                templateUrl: "/touch/gcrb/yx_zqgc.jsp"
            })
            .state('gc-sqgc',{
                url:"/gc/sqgc",
                templateUrl: "/touch/gcrb/yx_sqgc.jsp"
            })
            .state('gc-cqgc',{
                url:"/gc/cqgc",
                templateUrl: "/touch/gcrb/yx_cqgc.jsp"
            })
            .state('gc-dmgc',{
                url:"/gc/dmgc",
                templateUrl: "/touch/gcrb/yx_dmgc.jsp"
            })
            .state('gc-gcsj',{
                url:"/gc/gcsj",
                templateUrl: "/touch/gcrb/yx_gcsj.jsp"
            })
            
            
            
            .state('sc-scrb',{
                url: "/sc/scrb",
                templateUrl: "partials/s02-sc/scrb.html"
            })
            
            .state('sq-ylrb',{
                url: "/sq/ylrb",
                templateUrl: "partials/s03-sq/ylrb.html"
            })
            
            .state('cq-yqcl',{
                url: "/cq/yqcl",
                templateUrl: "partials/s04-cq/yqcl.html"
            })
        })

.controller('WeatherController', function($scope, $http){
    
    $http.get('testData.html')
    .then(function(response){
        $scope.data = response.data;
    })
    
//    $scope.data = [{
//        id: 'neighborhoodid',
//        value: 'neighborhood'
//    }, {
//        id: 'neighborhoodid1',
//        value: 'neighborhood2'
//    }]
})