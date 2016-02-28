/// <reference path="../typings/main/ambient/jasmine/jasmine.d.ts" />
/// <reference path="../typings/main/ambient/angular-mocks/angular-mocks.d.ts" />
/// <reference path="../src/service/movie-service.ts" />

describe("MovieService", () => {

    let service: MovieService;
    let $httpBackend: angular.IHttpBackendService;

    beforeEach(() => module("app"));

    beforeEach(inject((movieService, _$httpBackend_) => {
        service = movieService;
        $httpBackend = _$httpBackend_;

        $httpBackend.when("GET", "http://www.omdbapi.com/?s=Batman&page=2")
            .respond({
                Search: [
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
                ],
                totalResults: "277",
                Response: "True"
            });
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should have Batman: The Movie", () => {
        $httpBackend.expectGET("http://www.omdbapi.com/?s=Batman&page=2");

        service.search("batman").then((movies) => {
            expect(movies[0].title).toEqual("Batman: The Movie");
            expect(movies[0].year).toEqual("1966");
            expect(movies[0].poster).toEqual("http://ia.media-imdb.com/images/M/MV5BMTkzODAyMjg2Ml5BMl5BanBnXkFtZTgwMzI4NzM1MjE@._V1_SX300.jpg");
        });

        $httpBackend.flush();
    });

    it("should have Batman: Gotham Knight", () => {
        $httpBackend.expectGET("http://www.omdbapi.com/?s=Batman&page=2");

        service.search("batman").then((movies) => {
            expect(movies[1].title).toEqual("Batman: Gotham Knight");
            expect(movies[1].year).toEqual("2008");
            expect(movies[1].poster).toEqual("http://ia.media-imdb.com/images/M/MV5BMTQ1NjExODcyNl5BMl5BanBnXkFtZTcwMTk0MDc4MQ@@._V1_SX300.jpg");
        });

        $httpBackend.flush();
    });
});
