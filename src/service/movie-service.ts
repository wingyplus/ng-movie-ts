/// <reference path="../../typings/main/ambient/angular/angular.d.ts"/>


class Movie {
    constructor(public title: string) { }
}

class MovieService {
    search(title: string): Movie[] {
        return [
            new Movie("Batman: The Movie")
        ];
    }
}

angular.module("app").service("movieService", MovieService);
