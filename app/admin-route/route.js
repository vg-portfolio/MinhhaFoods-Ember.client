import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

//Checks to see if user is logged in before tranisitoning to admin route
//Create mixin for this
  beforeModel(){
    if (this.get('isAuthenticated')) {
      this.transitionTo('admin-route');
    } else{
      this.transitionTo('sign-in');
    }
  },



  actions: {
    updateAboutSec(data){
      return data.save()
      .then(() => {
        console.log("update about section success");
      })
      .catch(() => {
        console.log("update about section failed!");
      });
    },

    updateHistory(history, whyU){
      history.save()
      .then(() =>{
        console.log("history Success");
      })
      .catch((err) => {
        console.log(err);
      });
      whyU.save()
      .then(() =>{
        console.log("why us Success");
      })
      .catch((err) => {
        console.log(err);
      });
    },

    createAwards(data){
      let newAward = this.get('store').createRecord('award', data);
      newAward.save()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    },

    updateAward(award){
      award.save()
      .then(() =>{
        console.log("Award update Success");
      })
      .catch((err) => {
        console.log("Award update error");
        console.log(err);
      });
    },

    deleteAward(data){
      data.destroyRecord();
      console.log("destroyed");
    },

    updateProductSec(data){
      data.save()
      .then(() =>{
        console.log("update product section Success");
      })
      .catch((err) => {
        console.log("update product section Success");
      });
    },

    //createProductCat(){},

    //updateProductCat(){},

    //deleteProductCat(){},

    //createProduct(){},

    //updateProduct(){},

    //deleteProduct(){},



    //updateChefSec(){},

    //createChefCat(){},

    //updateChefCat(){},

    //destroyChefCat(){},

    //createRecipes(){},

    //updateRecipes(){},

    //destroyRecipes(){},


    //updateNewsSec(){},

    //createNewsPost(){},

    //updateNewsPost(){},

    //destroyNewsPost(){},


    //updateContactSec(){},

    //updateContact(){},


  }

});
