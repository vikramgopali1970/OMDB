app.controller('homeController', ['$scope','$state','Movies',function ($scope,$state,Movies) {
    $scope.submitSearch = function () {
        console.log("search ta is "+$scope.srchStr);
        if($scope.srchStr.includes(" ")){
            $scope.srchStr = $scope.srchStr.replace(" ","+")
        }
        console.log("search ta isasdsad "+$scope.srchStr);
        Movies.search($scope.srchStr).then(function (results) {
            console.log(results.data.Search);
            if(results.data.Search.length <= 0){
                alert("No movies");
            }else{
                Movies.storeQuery($scope.srchStr);
                Movies.save(results.data.Search);
                $state.go('searchResult',[]);
            }
        });

    }
}]);