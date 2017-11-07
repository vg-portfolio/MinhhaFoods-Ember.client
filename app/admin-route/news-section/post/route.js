import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('news-post');
  },

  actions: {
    // update(data){
    //   return data.save()
    //   .then(() => {
    //     return Materialize.toast('Update success', 4000, 'teal');
    //   })
    //   .catch(() => {
    //     return Materialize.toast('Error', 4000, 'red');
    //   });
    // },
    newPost(data){
      let post = this.store.createRecord('news-post', data);
      return post.save()
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

    delete(data){
      return data.destroyRecord()
      // then(() => {
      //   this.store.reloadAll();
      // })
      .then(() => {
        return Materialize.toast('Update success', 4000, 'teal');
      })
      .catch(() => {
        return Materialize.toast('Error', 4000, 'red');
      });
    },

  }
});
