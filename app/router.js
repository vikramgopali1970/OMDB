app.config(function ($stateProvider, $urlRouterProvider) {

	var home = {
        name : 'home',
        url : '/',
        controller: 'homeController',
        templateUrl : "home/home.html"
    };

    var srchRes = {
        name : 'searchResult',
        url : '/searchresults',
        controller: 'searchController',
        templateUrl : "searchResult/searchRes.html"
    };

    var MovieRes = {
        name : 'movieResult',
        url : '/movieresult',
        controller: 'movieController',
        templateUrl : "movieResult/movieRes.html"
    };

    $stateProvider.state(home);
    $stateProvider.state(srchRes);
    $stateProvider.state(MovieRes);
    $urlRouterProvider.otherwise("/");

});