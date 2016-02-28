/// <reference path="../typings/main/ambient/jasmine/jasmine.d.ts" />
/// <reference path="../typings/main/ambient/angular-mocks/angular-mocks.d.ts" />
/// <reference path="../src/service/movie-service.ts" />

describe("MovieService", () => {

    let service: MovieService;

    beforeEach(() => module("app"));

    beforeEach(inject((movieService) => {
        service = movieService;
    }));

    it("should have Batman: The Movie", () => {
        let movies: Movie[] = service.search("batman");

        expect(movies[0].title).toEqual("Batman: The Movie");
    });

    // it("should have Batman: Gotham Knight", () => {
    //     let service = new MovieService();
    //     let movies: Movie[] = service.search("batman");
    //
    //     expect(movies[1].title).toEqual("Batman: Gotham Knight");
    // });
});
