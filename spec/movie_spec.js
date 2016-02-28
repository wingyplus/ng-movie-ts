describe("MovieService", function () {
    var service;
    beforeEach(function () { return module("app"); });
    beforeEach(inject(function (movieService) {
        service = movieService;
    }));
    it("should have Batman: The Movie", function () {
        var movies = service.search("batman");
        expect(movies[0].title).toEqual("Batman: The Movie");
    });
});
