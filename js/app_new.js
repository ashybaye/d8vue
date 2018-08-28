apiURL = 'http://d8vue.dd:8083/api/movies'

new Vue({
  el: '#app_new',

  data: {
    hello: 'Hello World, again!',
    names: [
      {firstname: 'John', lastname: 'Doe'},
      {firstname: 'Jane', lastname: 'Jones'},
      {firstname: 'Will', lastname: 'Smith'},
    ],
    movies: '',
    liveFilter: '',
    genreFilter: '',
    genres: ''
  },

  ready: function(){
    this.getMovies();
  },

  methods: {
    getMovies: function(){
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
        console.log(JSON.stringify(genresArr));
        this.$set('genres', genresArr);
        //console.log(movies);
      });
    }
  }
})