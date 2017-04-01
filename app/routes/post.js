import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('post', params.post_id).then(function(data) {
      console.log(data.get('id'));
      console.log(data.get('title'));
      return data;
    });
  }
});
