function Movie(name, releaseYear, filmType, filmBlurb, duration, imdbRating, rtRating, watchedStatus) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.filmType = filmType;
    this.filmBlurb = filmBlurb;
    this.duration = duration;
    this.imdbRating = imdbRating;
    this.rtRating = rtRating;
    this.watchedStatus = watchedStatus;
    this.logMovie = function() {
        alert (`Netflix has a movie called ${this.name} that was released in ${this.releaseYear}. The movie is a ${this.filmType}, and it is about ${this.filmBlurb}. The duration is ${this.duration} long. According to popular movie ratings, IMDB gives it ${this.imdbRating} and Rotten Tomatoes gives it ${this.rtRating}. As of today, I have ${this.watchedStatus} this movie.`);
    };
};
// or
// I could have left the method out of the Movie object prototype and added it by doing this:
// Movie.prototype.logMovie = function() {
//         alert (`Netflix has a movie called ${this.name} that was released in ${this.releaseYear}. The movie is a ${this.filmType}, and it is about ${this.filmBlurb}. The duration is ${this.duration} long. According to popular movie ratings, IMDB gives it ${this.imdbRating} and Rotten Tomatoes gives it ${this.rtRating}. As of today, I have ${this.watchedStatus} this movie.`);
//     };

let parisIsBurning = new Movie ("Paris is Burning", "1990", "documentary", "New York City's drag scene in the 1980s, focusing on balls, voguing and the ambitions and dreams of those who gave the era its warmth and vitality", "1 hour and 11 minutes", "8.2 stars/10 stars", "100%", "not watched");

let moonlight = new Movie ("Moonlight", "2016", "coming-of-age drama", "the tender, heartbreaking story of a young man’s struggle to find himself, told across three defining chapters in his life as he experiences the ecstasy, pain, and beauty of falling in love, while grappling with his own sexuality", "1 hour and 51 minutes", "7.4 stars/10 stars", "98%", "watched");

let hannahGadsbyNanette = new Movie ("Hannah Gadsby: Nanette", "2018", "stand-up comedy", "the Australian comedian Hannah Gadsby taking an anti-comedy stance in her newest special", "1 hour and 10 minutes", "8.3 stars/10 stars", "100%", "watched");

let thePerksOfBeingAWallflower = new Movie ("The Perks of Being a Wallflower", "2012", "coming-of-age drama", "high school freshman Charlie, a wallflower who is always watching life from the sidelines, until two senior students, Sam and her stepbrother Patrick, become his mentors, helping him discover the joys of friendship, music and love in 1991 Pittsburgh, Pennsylvania", "1 hour and 43 minutes", "8 stars/10 stars", "86%", "watched");