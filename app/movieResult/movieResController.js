/**
 * Created by vgopali on 07-12-2016.
 */
app.controller('movieController', ['$scope','$state','Movies', function ($scope,$state,Movies) {
    console.log(Movies.getDetails());
    var str1 = Movies.getDetails();
    if(str1.includes(" ")){
        str1=str1.split(" ").join("+");
        console.log("here123",str1)
    }
    Movies.getMovie(str1).then(function (results) {
        console.log(results.data);
        $scope.dispDetails = results.data;
    });
    
}]);