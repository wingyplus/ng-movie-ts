/// <reference path="../../typings/main/ambient/angular/angular.d.ts"/>


class Movie {
    constructor(public title: string) { }
}

class MovieService {
    static $inject = ["$http"];

    constructor(public $http: angular.IHttpService) { }

    search(title: string): any {
        return this.$http.get("http://www.omdbapi.com/?s=Batman&page=2").then((response: any) => {
            console.log(response.data);
            return response.data.Search
        });
    }
}

angular.module("app").service("movieService", MovieService);
