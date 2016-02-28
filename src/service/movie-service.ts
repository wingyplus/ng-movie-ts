/// <reference path="../../typings/main/ambient/angular/angular.d.ts"/>


class Movie {
    constructor(public title: string, public year: string, public poster: string) { }
}

class MovieService {
    static $inject = ["$http"];

    constructor(public $http: angular.IHttpService) { }

    search(title: string): any {
        return this.$http.get("http://www.omdbapi.com/?s=Batman&page=2").then((response: any) => {
            return response.data.Search.map((movie) => new Movie(movie.Title, movie.Year, movie.Poster));
        });
    }
}

angular.module("app").service("movieService", MovieService);
