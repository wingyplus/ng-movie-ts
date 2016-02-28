/// <reference path="../typings/main/ambient/jquery/jquery.d.ts" />
/// <reference path="../typings/main/ambient/angular/angular.d.ts" />
/// <reference path="../typings/main/ambient/angular-route/angular-route.d.ts"/>

config.$inject = ["$routeProvider"];

function config($routeProvider: angular.route.IRouteProvider) {
    $routeProvider.when("/movies", {
        controller: "MovieListController",
        controllerAs: "movieListCtrl",
        templateUrl: "/src/movie/movie-list.html"
    });
}

angular.module("app", [
    "ngRoute",
    "app.movie"
]).config(config);
