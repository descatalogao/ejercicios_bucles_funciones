const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
oldmovies = []
recentmovies=[]
for (movie of movies){
    if (movie.releaseYear < 2000) {
        oldmovies.push(movie);
    } else {
        recentmovies.push(movie);
    }
}
console.log("Pelis recientes: ")
console.log(recentmovies)
console.log("Pelis antiguas: ")
console.log(oldmovies)
