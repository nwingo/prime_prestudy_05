var avengersMovie = {
    name: 'Avengers',
    runTime: "143 mins",
    releaseYear: '2012',
    Director: "Joss Whedon",
movieSummary: function() {
  return this.name + "runs" + this.runTime + "and was released in" + this.releaseYear + "." + "Avengers was directed by" + this.Director;
}

};

console.log(avengersMovie);
