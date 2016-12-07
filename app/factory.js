var app = angular.module('myApp', [
    'ui.router',
    'xeditable'
]);

app.factory('Movies',function ($http) {

    var allSearchResults = [];
    var searchQuery = "";
    var selectedMovie="";

    var MovieDetails = function (selMov) {
        selectedMovie  = selMov;
    };

    var saveResults = function (resultData) {
        allSearchResults  = resultData;
    };

    var saveSearchQuery= function (queryStr) {
        searchQuery  = queryStr;
    };
    
    var getSaveResults = function () {
        return allSearchResults;
    };

    var getMovDetails = function () {
        return selectedMovie;
    };

    var getResults = function () {
        return searchQuery;
    };
    
    var searchMovie = function (queryStr) {
        return $http.get('http://www.omdbapi.com/?s='+queryStr+'&y=&plot=short&r=json').success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    };

    var getFullMovieDetails = function (movStr) {
        return $http.get('http://www.omdbapi.com/?t='+movStr+'&y=&plot=short&r=json').success(function (data, status) {
            console.log(status);
            console.log(data);
        }).error(function (error) {
            console.log('error',error);
        });
    };

    return{
        search: searchMovie,
        save: saveResults,
        getSrchRes: getSaveResults,
        storeQuery : saveSearchQuery,
        getQuery: getResults,
        selected : MovieDetails,
        getDetails : getMovDetails,
        getMovie : getFullMovieDetails
        
    }
});