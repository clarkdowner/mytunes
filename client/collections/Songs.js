// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    var context = this;

    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs',
      success: function(data) {
        context.reset(data.results);        
      },
      error: function(error) {
        console.error(error);
      }
    });

    
  }

});