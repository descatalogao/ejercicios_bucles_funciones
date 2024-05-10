const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  

const genres= [];

for(track of tracks){
  var repeat=0;
  for (genre of genres){
    if(track.genre === genre){
      repeat++
    }
  }
  if (repeat == 0){
    genres.push(track.genre)
  };
}
groups=[];

for (genre of genres){
  var array= [];
  for (track of tracks){
    if (track.genre === (genre))
      array.push(track.title);
  }
  var active = {
        genre: (genre),
        songs: (array)
      };
  groups.push(active);
}


console.log(groups);
