import Ember from "ember";

export default Ember.Controller.extend({
  actions: {
    fixdata: function() {
      console.log('fixdata');
      var self = this;
      this.get('content').forEach(function(listPostObj) {
        var authorVar = listPostObj.get('author');
         self.get('authors').forEach(function(listAuthorObj) {
           var authorName = listAuthorObj.get('name');
           var authorID = listAuthorObj.get('id');
           if (authorName === authorVar) {
             console.log(authorName);
             console.log(authorID);
             console.log(authorVar);
             listPostObj.set('author', authorID);
             listPostObj.save();
           }
          console.log('------');
        });
      });

      return false;
//      this.modelFor('fixdata').save();
    }
  }
});
