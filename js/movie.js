class Movie {
    constructor(title,studio,rating="PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    static getPG(array){
        let PGarr = [];
        for(let obj of array){
            if(obj.rating === "PG"){
                PGarr.push(obj);
            }
        }
        return PGarr;
    }
}

movieArray = [];
function addMovie(title,studio,rating){
    movieArray.push(new Movie(title,studio,rating));
}
addMovie("Leo","Red Giant","PG");
addMovie("Naruto","Jackie Production","TV-14");
addMovie("Goat","Kalpthi Agoram","NC-15");
addMovie("Jujutsu kaisen","Dreamworks");

console.log("MOVIES with PG rating :");
console.log(MOVIE.getPG(movieArray));
