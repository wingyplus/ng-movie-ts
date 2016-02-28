/// <reference path="../typings/main/ambient/jasmine/jasmine.d.ts"/>
/// <reference path="../typings/main/ambient/angular-mocks/angular-mocks.d.ts"/>
/// <reference path="../src/movie/movie-list-controller.ts"/>

describe("MovieListController", () => {
    let controller: MovieListController;
    let movieService: MovieService;
    let $q: angular.IQService;
    let $rootScope: angular.IRootScopeService;

    beforeEach(() => module("app.movie"));

    beforeEach(inject(($controller, _$q_, _$rootScope_, _movieService_) => {
        $q = _$q_;
        $rootScope = _$rootScope_;
        movieService = _movieService_;
        controller = $controller("MovieListController", {
            movieService: movieService
        });

    }));

    it("should have empty movies", () => {
        expect(controller.movies.length).toEqual(0);
    });

    it("should have 10 movies when search with 'batman'", () => {
        spyOn(movieService, "search").and.returnValue($q.resolve<Movie[]>([
            {
                Title: "Batman: The Movie",
                Year: "1966",
                imdbID: "tt0060153",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTkzODAyMjg2Ml5BMl5BanBnXkFtZTgwMzI4NzM1MjE@._V1_SX300.jpg"
            },
            {
                Title: "Batman: Gotham Knight",
                Year: "2008",
                imdbID: "tt1117563",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTQ1NjExODcyNl5BMl5BanBnXkFtZTcwMTk0MDc4MQ@@._V1_SX300.jpg"
            },
            {
                Title: "Batman: Year One",
                Year: "2011",
                imdbID: "tt1672723",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMjE2MzMxNDQ1NF5BMl5BanBnXkFtZTcwNzE1NTI5Ng@@._V1_SX300.jpg"
            },
            {
                Title: "Batman: Arkham City",
                Year: "2011",
                imdbID: "tt1568322",
                Type: "game",
                Poster: "http://ia.media-imdb.com/images/M/MV5BZDhjZTVkZGYtNWFmMC00MDU5LWIxZjEtNzQ4NjU1OTNlNTJlXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg"
            },
            {
                Title: "Batman Beyond",
                Year: "1999–2001",
                imdbID: "tt0147746",
                Type: "series",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTA3MjkzNDM0OTBeQTJeQWpwZ15BbWU3MDk3ODM5MjE@._V1._CR1,0,208,299_SY132_CR1,0,89,132_AL_.jpg_V1_SX300.jpg"
            },
            {
                Title: "Superman/Batman: Apocalypse",
                Year: "2010",
                imdbID: "tt1673430",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTYzMDU0MjEwOF5BMl5BanBnXkFtZTcwOTA5ODc2Mw@@._V1_SX300.jpg"
            },
            {
                Title: "Batman: Arkham Asylum",
                Year: "2009",
                imdbID: "tt1282022",
                Type: "game",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTUyMzMzMTU0MF5BMl5BanBnXkFtZTcwNDM3MTcxMw@@._V1_SX300.jpg"
            },
            {
                Title: "Batman Beyond: Return of the Joker",
                Year: "2000",
                imdbID: "tt0233298",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTQ4MDQwMDUxNF5BMl5BanBnXkFtZTcwODY2NDEyMQ@@._V1_SX300.jpg"
            },
            {
                Title: "Batman: Assault on Arkham",
                Year: "2014",
                imdbID: "tt3139086",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTAxMDY2OTA2NzReQTJeQWpwZ15BbWU4MDg1NDk1MzIx._V1_SX300.jpg"
            },
            {
                Title: "Superman/Batman: Public Enemies",
                Year: "2009",
                imdbID: "tt1398941",
                Type: "movie",
                Poster: "http://ia.media-imdb.com/images/M/MV5BMTM4MjE3Mjg2NV5BMl5BanBnXkFtZTcwMTg5Mzg2Mg@@._V1_SX300.jpg"
            }
        ].map((movie) => new Movie(movie.Title, movie.Year, movie.Poster))));

        controller.search("batman");

        $rootScope.$apply();

        expect(movieService.search).toHaveBeenCalledWith("batman");
        expect(controller.movies.length).toEqual(10);
    });
});
