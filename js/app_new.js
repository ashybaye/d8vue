apiURL = 'http://d8vue.dd:8083/api/movies'

new Vue({
  el: '#app_new',

  data: {
    movies: '',
    liveFilter: '',
    genreFilter: '',
    genres: '',
    movie: ''
  },

  ready: function(){
    this.getMovies();
  },

  methods: {
    getMovies: function(){
      this.$set('movie', '');
      this.$http.get(apiURL, function(movies){
        this.$set('movies', movies);
        genresArr = [];
        jQuery.each(movies, function(index, movie){
          jQuery.each(movie.field_genres, function(index, genre){
            if (jQuery.inArray(genre.value, genresArr) === -1) {
              genresArr.push(genre.value);
            }
            
          }) 
        })
        //console.log(JSON.stringify(genresArr));
        this.$set('genres', genresArr);
        //console.log(movies);
      });
    },
    getTheMovie: function(movieID){
      this.$http.get(apiURL + '/' + movieID, function(movie){
        this.$set('movie', movie);
        //console.log(JSON.stringify(movie));
      })
      //alert(movieID);
    }

  }
})