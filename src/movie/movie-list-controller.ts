/// <reference path="../../typings/main/ambient/angular/angular.d.ts"/>


class MovieListController {

    static $inject = ["movieService"];

    movies: Movie[] = [];

    constructor(public movieService) {}

    search(title: string) {
        this.movieService.search(title).then((movies) => this.movies = movies);
    }
}

angular.module("app.movie", ["app.service"])
    .controller("MovieListController", MovieListController);
