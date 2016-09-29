// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();

    var context = this;

    $.ajax({
      type: 'GET',
      url: 'https://api.parse.com/1/classes/songs/',
      success: function(data) {
        // console.log('this: ', this);
        // LibraryView.render();
        console.log('data is: ', data);
        console.log('libary: ', context.collection);
        // console.log('LibraryView: ', LibraryView;
        data.results.forEach(function(obj) {
          context.collection.add(obj);
        });

        context.render();

        console.log('libary after: ', context.collection);

      }
    });
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
