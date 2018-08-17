apiURL = 'http://d8vue.dd:8083/api/movies'

new Vue({
  el: '#app_new',

  data: {
    hello: 'Hello World, again!',
    names: [
      {firstname: 'John', lastname: 'Doe'},
      {firstname: 'Jane', lastname: 'Jones'},
      {firstname: 'Will', lastname: 'Smith'},
    ]
  },

  ready: function(){
    this.getMovies();
  },

  methods: {
    getMovies: function(){
      this.$http.get(apiURL, function(movies){
        this.$set('movies', movies);
        console.log(movies);
      });
    }
  }
})