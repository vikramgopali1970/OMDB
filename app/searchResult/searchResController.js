/**
 * Created by vgopali on 07-12-2016.
 */
app.controller('searchController', ['$scope','$state','Movies', function ($scope,$state,Movies) {
    console.log("here");
    console.log("lol",Movies.getSrchRes().length);
    $scope.results = Movies.getSrchRes();

    $scope.searchQueryStr = Movies.getQuery();

    $scope.movieDetails = function (str) {
        console.log("selected movie is ",str);
        Movies.selected(str);
    }
}]);