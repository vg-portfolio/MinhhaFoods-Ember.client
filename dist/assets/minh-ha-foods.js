"use strict";



define('minh-ha-foods/about-section/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    imageUrl2: _emberData['default'].attr('string'),
    imageUrl3: _emberData['default'].attr('string'),
    history: _emberData['default'].belongsTo('history'),
    whyU: _emberData['default'].belongsTo('why-u'),
    awards: _emberData['default'].hasMany('award')
  });
});
define('minh-ha-foods/admin-route/about-sections/awards/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('award');
    },

    actions: {
      updateAward: function updateAward(award) {
        return award.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },

      newAward: function newAward(data) {
        var newAward = this.store.createRecord('award', data);
        return newAward.save().then(function () {
          return Materialize.toast('New award saved!', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },

      deleteAward: function deleteAward(data) {
        var _this = this;

        return data.destroyRecord().then(function () {
          return Materialize.toast('Delete success', 4000, 'teal');
        }).then(function () {
          _this.get('store').reloadAll();
        });
      }

    }
  });
});
define("minh-ha-foods/admin-route/about-sections/awards/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "I3F9YmH3", "block": "{\"statements\":[[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input-form\"],null,[[\"whichForm\",\"model\",\"delete\",\"update\",\"save\",\"newButton\"],[\"awardForm\",[\"get\",[\"model\"]],\"deleteAward\",\"updateAward\",\"newAward\",\"Create Award\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/about-sections/awards/template.hbs" } });
});
define('minh-ha-foods/admin-route/about-sections/history/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('history').then(function (item) {
        return item.get('firstObject');
      });
    },

    actions: {
      saveHistory: function saveHistory(history) {
        history.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }
    }
  });
});
define("minh-ha-foods/admin-route/about-sections/history/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "azfG4X2e", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"History\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveHistory\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/about-sections/history/template.hbs" } });
});
define('minh-ha-foods/admin-route/about-sections/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('about-section').then(function (about) {
        return about.get('firstObject');
      });
    },

    newModel: {},

    actions: {
      saveAbout: function saveAbout(m) {
        console.log("Yo");
        console.log(m);
        return m.save().then(function () {
          Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          Materialize.toast('Error', 4000, 'red');
        });
        // newAbout.save()
        // .then(() => {
        //   return console.log("save success");
        // });
      }

    }
  });
});
define('minh-ha-foods/admin-route/about-sections/serializer', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      history: { embedded: 'always' },
      whyU: { embedded: 'always ' },
      awards: { ebedded: 'always' }
    }
  });
});
define("minh-ha-foods/admin-route/about-sections/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "KGVoz2wV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"About Section\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"imageUrl\"]],\"Image URL\",\"col s12 m6\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"imageUrl2\"]],\"Image 2 URL\",\"col s12 m6\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"imageUrl3\"]],\"Image 3 URL\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveAbout\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"link-button center-align\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.about-sections.history\"],[[\"class\"],[\"btn\"]],2],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.about-sections.why-us\"],[[\"class\"],[\"btn\"]],1],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.about-sections.awards\"],[[\"class\"],[\"btn\"]],0],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Awards\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Why Us\"]],\"locals\":[]},{\"statements\":[[\"text\",\"History\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/about-sections/template.hbs" } });
});
define('minh-ha-foods/admin-route/about-sections/why-us/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('why-u').then(function (why) {
        return why.get('firstObject');
      });
    },

    actions: {
      saveWhy: function saveWhy(data) {
        return data.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }
    }
  });
});
define("minh-ha-foods/admin-route/about-sections/why-us/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SPu8d3PC", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Additional\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveWhy\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/about-sections/why-us/template.hbs" } });
});
define('minh-ha-foods/admin-route/chef-section/categories/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('chef-category');
    },

    actions: {
      updateCat: function updateCat(data) {
        return data.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },
      newCat: function newCat(data) {
        var newCat = this.store.createRecord('chefCategory', data);
        return newCat.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },

      deleteCat: function deleteCat(data) {
        var _this = this;

        return data.destroyRecord().then(function () {
          _this.store.reloadAll();
        }).then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }

    }
  });
});
define("minh-ha-foods/admin-route/chef-section/categories/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hSHE7sgX", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-form\"],null,[[\"whichForm\",\"model\",\"delete\",\"update\",\"save\",\"cardTitle\",\"newButton\"],[\"chefCatForm\",[\"get\",[\"model\"]],\"deleteCat\",\"updateCat\",\"newCat\",\"Chef Categories\",\"Create Category\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/chef-section/categories/template.hbs" } });
});
define('minh-ha-foods/admin-route/chef-section/dishes/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _ember['default'].RSVP.hash({
        dishes: this.store.findAll('dish'),
        categories: this.store.findAll('chef-category')
      });
    },
    setupController: function setupController(controller, models) {
      controller.setProperties(models);
    },

    actions: {
      deleteDish: function deleteDish(data) {
        var _this = this;

        return data.destroyRecord().then(function () {
          return _this.store.reloadAll();
        }).then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        });
      },
      updateDish: function updateDish(data) {
        return data.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },
      newDish: function newDish(data) {
        console.log(data);
        // let category = this.store.findRecord('productCategory', data.productCategoryId);
        var newPro = this.store.createRecord('dish', data);
        // return this.store.findRecord('productCategory', data.productCategoryId)
        return newPro.save()
        // .then((category) => {
        //   return newPro.set('productCategory', category)
        // })
        .then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function (err) {
          return Materialize.toast(err, 4000, 'red');
        });
      }
    }

  });
});
define("minh-ha-foods/admin-route/chef-section/dishes/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "BAmJARpg", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-form\"],null,[[\"whichForm\",\"dishes\",\"categories\",\"delete\",\"update\",\"save\",\"cardTitle\",\"newButton\"],[\"dishForm\",[\"get\",[\"dishes\"]],[\"get\",[\"categories\"]],\"deleteDish\",\"updateDish\",\"newDish\",\"Dishes\",\"Create new dish\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/chef-section/dishes/template.hbs" } });
});
define('minh-ha-foods/admin-route/chef-section/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('chef-section').then(function (record) {
        return record.get('firstObject');
      });
    },

    actions: {
      saveSection: function saveSection(model) {
        return model.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }

    }
  });
});
define("minh-ha-foods/admin-route/chef-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "xUwlNiis", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Chef Section\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveSection\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"link-button center-align\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.chef-section.categories\"],[[\"class\"],[\"btn\"]],1],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.chef-section.dishes\"],[[\"class\"],[\"btn\"]],0],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Dishes\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Categories\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/chef-section/template.hbs" } });
});
define('minh-ha-foods/admin-route/contact/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('contact').then(function (record) {
        return record.get('firstObject');
      });
    },

    actions: {
      save: function save(contact) {
        return contact.save().then(function () {
          Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          Materialize.toast('Error', 4000, 'red');
        });
      }
    }
  });
});
define("minh-ha-foods/admin-route/contact/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7NRgKuDv", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Contact Section\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Company Name\",[\"get\",[\"model\",\"companyName\"]],\"col s12\"]]],false],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Company Vn\",[\"get\",[\"model\",\"companyNameVn\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Tel\",[\"get\",[\"model\",\"tel\"]],\"col s6\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Fax\",[\"get\",[\"model\",\"fax\"]],\"col s6\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"hotline\",[\"get\",[\"model\",\"hotline\"]],\"col s6\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Address\",[\"get\",[\"model\",\"address\"]],\"col s6\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Facebook link\",[\"get\",[\"model\",\"fbLink\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/contact/template.hbs" } });
});
define('minh-ha-foods/admin-route/news-section/post/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
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
      newPost: function newPost(data) {
        var post = this.store.createRecord('news-post', data);
        return post.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },

      'delete': function _delete(data) {
        return data.destroyRecord()
        // then(() => {
        //   this.store.reloadAll();
        // })
        .then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }

    }
  });
});
define("minh-ha-foods/admin-route/news-section/post/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8wFO9bth", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-form\"],null,[[\"whichForm\",\"model\",\"delete\",\"save\",\"cardTitle\",\"newButton\"],[\"postForm\",[\"get\",[\"model\"]],\"delete\",\"newPost\",\"News Post\",\"Create post\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/news-section/post/template.hbs" } });
});
define('minh-ha-foods/admin-route/news-section/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('news-section').then(function (record) {
        return record.get('firstObject');
      });
    },

    actions: {
      saveSection: function saveSection(model) {
        return model.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }

    }
  });
});
define('minh-ha-foods/admin-route/news-section/serializer', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      newsPost: { embedded: 'always' }
    }
  });
});
define("minh-ha-foods/admin-route/news-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6vLLpua+", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"News Section\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveSection\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"link-button center-align\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.news-section.post\"],[[\"class\"],[\"btn\"]],0],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"News Posts\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/news-section/template.hbs" } });
});
define('minh-ha-foods/admin-route/product-sections/categories/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('product-category');
    },

    actions: {
      updateCat: function updateCat(data) {
        return data.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },
      newCat: function newCat(data) {
        var newCat = this.store.createRecord('productCategory', data);
        return newCat.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },

      deleteCat: function deleteCat(data) {
        var _this = this;

        return data.destroyRecord().then(function () {
          _this.store.reloadAll();
        }).then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }

    }
  });
});
define("minh-ha-foods/admin-route/product-sections/categories/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jGU9ISIa", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-form\"],null,[[\"whichForm\",\"model\",\"delete\",\"update\",\"save\",\"cardTitle\",\"newButton\"],[\"catForm\",[\"get\",[\"model\"]],\"deleteCat\",\"updateCat\",\"newCat\",\"Product Categories\",\"Create Category\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/product-sections/categories/template.hbs" } });
});
define('minh-ha-foods/admin-route/product-sections/category/products/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('products');
    }
  });
});
define("minh-ha-foods/admin-route/product-sections/category/products/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vp5EUsxl", "block": "{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Products\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"m\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"m\"]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/product-sections/category/products/template.hbs" } });
});
define('minh-ha-foods/admin-route/product-sections/category/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('product-category', params.product_category_id);
    }
  });
});
define("minh-ha-foods/admin-route/product-sections/category/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qQsTgkM7", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"category\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/product-sections/category/template.hbs" } });
});
define('minh-ha-foods/admin-route/product-sections/products/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model() {
      return _ember['default'].RSVP.hash({
        products: this.store.findAll('product'),
        categories: this.store.findAll('product-category')
      });
    },

    setupController: function setupController(controller, models) {
      controller.setProperties(models);
    },

    actions: {
      deletePro: function deletePro(data) {
        var _this = this;

        return data.destroyRecord().then(function () {
          return _this.store.reloadAll();
        }).then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        });
      },
      updatePro: function updatePro(data) {
        return data.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      },
      newPro: function newPro(data) {
        console.log(data);
        // let category = this.store.findRecord('productCategory', data.productCategoryId);
        var newPro = this.store.createRecord('product', data);
        // return this.store.findRecord('productCategory', data.productCategoryId)
        return newPro.save()
        // .then((category) => {
        //   return newPro.set('productCategory', category)
        // })
        .then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }
    }
  });
});
define("minh-ha-foods/admin-route/product-sections/products/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "UTlVDG1f", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-form\"],null,[[\"whichForm\",\"products\",\"categories\",\"delete\",\"update\",\"save\",\"cardTitle\",\"newButton\"],[\"productForm\",[\"get\",[\"products\"]],[\"get\",[\"categories\"]],\"deletePro\",\"updatePro\",\"newPro\",\"Products\",\"Create new product\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/product-sections/products/template.hbs" } });
});
define('minh-ha-foods/admin-route/product-sections/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('product-section').then(function (product) {
        return product.get('firstObject');
      });
    },

    actions: {
      saveProSection: function saveProSection(model) {
        return model.save().then(function () {
          return Materialize.toast('Update success', 4000, 'teal');
        })['catch'](function () {
          return Materialize.toast('Error', 4000, 'red');
        });
      }

    }
  });
});
define("minh-ha-foods/admin-route/product-sections/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+blA+7Hq", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Product Section\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Vietnamese section heading\",\"col s12 m6\"]]],false],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n              \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Vietnamese description\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveProSection\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"link-button center-align\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.product-sections.categories\"],[[\"class\"],[\"btn\"]],1],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.product-sections.products\"],[[\"class\"],[\"btn\"]],0],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Products\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Categories\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/product-sections/template.hbs" } });
});
define('minh-ha-foods/admin-route/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    //Checks to see if user is logged in before tranisitoning to admin route
    //Create mixin for this
    beforeModel: function beforeModel() {
      if (this.get('isAuthenticated')) {
        this.transitionTo('admin-route');
      } else {
        this.transitionTo('sign-in');
      }
    }

  });
});
// actions: {
//   updateAboutSec(data){
//     return data.save()
//     .then(() => {
//       return Materialize.toast('Update success', 4000, 'teal');
//     })
//     .catch(() => {
//       return Materialize.toast('Error', 4000, 'red');
//     });
//   },
//
//   updateHistory(history, whyU){
//     history.save()
//     .then(() =>{
//       console.log("history Success");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//     whyU.save()
//     .then(() =>{
//       console.log("why us Success");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   },
//
//   createAwards(data){
//     let newAward = this.get('store').createRecord('award', data);
//     newAward.save()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   },
//
//   updateAward(award){
//     award.save()
//     .then(() =>{
//       console.log("Award update Success");
//     })
//     .catch((err) => {
//       console.log("Award update error");
//       console.log(err);
//     });
//   },
//
//   deleteAward(data){
//     data.destroyRecord();
//     console.log("destroyed");
//   },
//
//   updateProductSec(data){
//     data.save()
//     .then(() =>{
//       console.log("update product section Success");
//     })
//     .catch((err) => {
//       console.log("update product section Success");
//     });
//   },
//
//   //createProductCat(){},
//
//   //updateProductCat(){},
//
//   //deleteProductCat(){},
//
//   //createProduct(){},
//
//   //updateProduct(){},
//
//   //deleteProduct(){},
//
//
//
//   //updateChefSec(){},
//
//   //createChefCat(){},
//
//   //updateChefCat(){},
//
//   //destroyChefCat(){},
//
//   //createRecipes(){},
//
//   //updateRecipes(){},
//
//   //destroyRecipes(){},
//
//
//   //updateNewsSec(){},
//
//   //createNewsPost(){},
//
//   //updateNewsPost(){},
//
//   //destroyNewsPost(){},
//
//
//   //updateContactSec(){},
//
//   //updateContact(){},
//
//
// }
define("minh-ha-foods/admin-route/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rapzo+n9", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"admin-dashboard card-panel large link-button center-align\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Admin Dashboard\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.about-sections\"],[[\"class\"],[\"btn btn-default\"]],4],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.product-sections\"],[[\"class\"],[\"btn btn-default\"]],3],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.chef-section\"],[[\"class\"],[\"btn btn-default\"]],2],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.news-section\"],[[\"class\"],[\"btn btn-default\"]],1],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"admin-route.contact\"],[[\"class\"],[\"btn btn-default\"]],0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Contact Section \"]],\"locals\":[]},{\"statements\":[[\"text\",\"News Section \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Chef Section \"]],\"locals\":[]},{\"statements\":[[\"text\",\"Product Section \"]],\"locals\":[]},{\"statements\":[[\"text\",\"About Section \"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/admin-route/template.hbs" } });
});
define('minh-ha-foods/ajax/service', ['exports', 'ember', 'ember-ajax/services/ajax', 'minh-ha-foods/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _minhHaFoodsConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _minhHaFoodsConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('minh-ha-foods/app', ['exports', 'ember', 'minh-ha-foods/resolver', 'ember-load-initializers', 'minh-ha-foods/config/environment'], function (exports, _ember, _minhHaFoodsResolver, _emberLoadInitializers, _minhHaFoodsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _minhHaFoodsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _minhHaFoodsConfigEnvironment['default'].podModulePrefix,
    Resolver: _minhHaFoodsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _minhHaFoodsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('minh-ha-foods/application/adapter', ['exports', 'minh-ha-foods/config/environment', 'active-model-adapter', 'ember'], function (exports, _minhHaFoodsConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _minhHaFoodsConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })

  });
});
// allows the multiword paths in urls to be underscored
// pathForType: function(type) {
//   let underscored = Ember.String.underscore(type);
//   return Ember.String.pluralize(underscored);
// },

// allows queries to be sent along with a findRecord
// hopefully Ember / EmberData will soon have this built in
// ember-data issue tracked here:
// https://github.com/emberjs/data/issues/3596
// urlForFindRecord(id, modelName, snapshot) {
//   let url = this._super(...arguments);
//   let query = Ember.get(snapshot, 'adapterOptions.query');
//   if(query) {
//     url += '?' + Ember.$.param(query);
//   }
//   return url;
// }
define('minh-ha-foods/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut()
        // .then(() => this.get('store').unloadAll())
        .then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-in');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }

        return false;
      }
    }
  });
});
define('minh-ha-foods/application/serializer', ['exports', 'ember', 'active-model-adapter'], function (exports, _ember, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({
    // modelNameFromPayloadKey(modelName) {
    //   return singularize(modelName);
    // }
    // keyForAttribute: function(attr) {
    //   return underscore(attr);
    // },
    //
    // keyForRelationship: function(rawKey) {
    //   return underscore(rawKey);
    // }

    // keyForAttribute: function(attr) {
    //   return Ember.string.underscore(attr);
    // },

    // keyForRelationship: function(rawKey) {
    //   return underscore(rawKey);
    // }

  });
});
define("minh-ha-foods/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8Iy6NsvG", "block": "{\"statements\":[[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/application/template.hbs" } });
});
define('minh-ha-foods/auth/service', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('minh-ha-foods/auth/storage', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define('minh-ha-foods/award/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    aboutSection: _emberData['default'].belongsTo('about-section')
  });
});
define('minh-ha-foods/category/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    catType: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    categorizableType: _emberData['default'].attr(),
    productSection: _emberData['default'].belongsTo('product-section', { inverse: 'categories' }),
    chefSection: _emberData['default'].belongsTo('chef-section', { inverse: 'categories' }),
    products: _emberData['default'].hasMany('product'),
    dishes: _emberData['default'].hasMany('dish')
  });
});
define('minh-ha-foods/change-password/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          Materialize.toast('Your password has been changed', 3000, 'blue');
        }).then(function () {
          Materialize.toast('Please sign back in', 3000, 'blue');
        }).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        })['catch'](function (err) {
          Materialize.toast(err, 5000, 'red');
        });
      }
    }
  });
});
define("minh-ha-foods/change-password/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "loPGG24r", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m8 offset-m2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card blue-grey darken-1 sign-in-card\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-content white-text\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"card-title\"],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"all-forms/change-password\"],null,[[\"submit\"],[\"changePassword\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/change-password/template.hbs" } });
});
define('minh-ha-foods/chef-category/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    catType: _emberData['default'].attr('string'),
    catTypeVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    chefSection: _emberData['default'].belongsTo('chef-section'),
    imageUrl: _emberData['default'].attr('string'),
    dishes: _emberData['default'].hasMany('dish')
  });
});
define('minh-ha-foods/chef-category/serializer', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      dishes: { embedded: 'always' }
    }
  });
});
define('minh-ha-foods/chef-dishes/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('chef-category', params.chef_category_id);
    }
  });
});
define("minh-ha-foods/chef-dishes/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "iHLi2VJo", "block": "{\"statements\":[[\"append\",[\"helper\",[\"banner-image\"],null,[[\"bannerType\",\"model\"],[\"dish\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"chef-dishes container center-align\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"white-text\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"model\",\"catType\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text white-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row dishes\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\",\"dishes\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"d\",\"details\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"video-container\"],[\"flush-element\"],[\"text\",\"\\n               \"],[\"open-element\",\"iframe\",[]],[\"static-attr\",\"width\",\"560\"],[\"static-attr\",\"height\",\"315\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"d\",\"youtubeLink\"]]]]],[\"static-attr\",\"frameborder\",\"0\"],[\"static-attr\",\"allowfullscreen\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n             \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"            \"],[\"append\",[\"unknown\",[\"d\",\"details\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"md-card-content\"],null,null,1],[\"block\",[\"md-card-reveal\"],null,null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m6\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"md-card\"],null,[[\"title\",\"image\",\"activator\"],[[\"get\",[\"d\",\"title\"]],[\"get\",[\"d\",\"imageUrl\"]],true]],2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"d\"]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/chef-dishes/template.hbs" } });
});
define('minh-ha-foods/chef-section/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    chefCategories: _emberData['default'].hasMany('chefCategory')
  });
});
define('minh-ha-foods/components/admin-page/about-section/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isformShown: false,
    newAward: {},

    actions: {
      showForm: function showForm() {
        this.set('isformShown', true);
      },
      cancel: function cancel() {
        this.set('isformShown', false);
      },
      update: function update() {
        this.sendAction('update', this.get('aboutSection'));
      },
      updateHis: function updateHis() {
        this.sendAction('updateHisWhy', this.get('history'), this.get('whyU'));
      },
      create: function create(data) {
        this.sendAction('create', data);
        this.set('newAward', {});
        this.set('isformShown', false);
      },
      updateAwards: function updateAwards() {
        this.sendAction('updateAward', this.get('awards'));
      },
      deleteAward: function deleteAward(data) {
        this.sendAction('delete', data);
      }
    }
  });
});
define("minh-ha-foods/components/admin-page/about-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DNXQYRFQ", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"comment\",\"Award Section Card\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"About Section\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\"]],[\"flush-element\"],[\"text\",\"\\n        Save\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Section title:\"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"get\",[\"aboutSection\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Section body: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\",\"row\"],[[\"get\",[\"aboutSection\",\"description\"]],\"10\"]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"comment\",\" Card actions \"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"comment\",\"History\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"History\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateHis\"]],[\"flush-element\"],[\"text\",\"\\n        Save\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Header:\"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"get\",[\"history\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Body: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\"],[[\"get\",[\"history\",\"description\"]]]]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"comment\",\"Why Us\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Why Us\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateHis\"]],[\"flush-element\"],[\"text\",\"\\n        Save\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Header: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"get\",[\"whyU\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Body: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\"],[[\"get\",[\"whyU\",\"description\"]]]]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Award heading row\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container center-align\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Awards\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showForm\"]],[\"flush-element\"],[\"text\",\"\\n      +\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateAwards\"]],[\"flush-element\"],[\"text\",\"Save awards\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"New award form \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isformShown\"]]],null,2],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"All awards container\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"unless\"],[[\"get\",[\"isformShown\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m3 l2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"right-align\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"deleteAward\",[\"get\",[\"award\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Title: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"get\",[\"award\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Body: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\"],[[\"get\",[\"award\",\"description\"]]]]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"award\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"awards\"]]],null,0]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m8 offset-m2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"New Award\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Title: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"get\",[\"newAward\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Body: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\",\"row\"],[[\"get\",[\"newAward\",\"description\"]],\"6\"]]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"btn btn-flat\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"create\",[\"get\",[\"newAward\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"btn btn-flat\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"cancel\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/admin-page/about-section/template.hbs" } });
});
define('minh-ha-foods/components/admin-page/product-section/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      updateProSec: function updateProSec() {
        this.sendAction('updateProductSec', this.get('productSection'));
      }
    }
  });
});
define("minh-ha-foods/components/admin-page/product-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "cLrNM0yV", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-content\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"comment\",\"product Section\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"card-title\"],[\"flush-element\"],[\"text\",\"Product Section\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Section title:\"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\"],[[\"get\",[\"productSection\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Section body: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"value\",\"row\"],[[\"get\",[\"productSection\",\"description\"]],\"6\"]]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateProSec\"]],[\"flush-element\"],[\"text\",\"\\n        Save\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/admin-page/product-section/template.hbs" } });
});
define('minh-ha-foods/components/all-forms/change-password/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    passwords: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
      }
    }
  });
});
define("minh-ha-foods/components/all-forms/change-password/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "51GV0ihw", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/all-forms/change-password/template.hbs" } });
});
define('minh-ha-foods/components/all-forms/sign-in-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define("minh-ha-foods/components/all-forms/sign-in-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2hJ5Rr5Z", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-fields/email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input-fields/password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/all-forms/sign-in-form/template.hbs" } });
});
define('minh-ha-foods/components/all-forms/sign-up-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    credentials: {},

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define("minh-ha-foods/components/all-forms/sign-up-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "wRRWxVRo", "block": "{\"statements\":[[\"append\",[\"helper\",[\"input-fields/email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input-fields/password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input-fields/password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/all-forms/sign-up-form/template.hbs" } });
});
define('minh-ha-foods/components/award-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newAward: {},
    awardFormShown: false,

    actions: {
      save: function save() {
        this.sendAction('save', this.get('newAward'));
        this.set('newAward', {});
        this.set('awardFormShown', false);
      },
      addNewAward: function addNewAward() {
        this.set('awardFormShown', true);
      },
      closeForm: function closeForm() {
        this.set('awardFormShown', false);
        this.set('newAward', {});
      },
      'delete': function _delete(data) {
        this.sendAction('delete', data);
      }
    }
  });
});
define("minh-ha-foods/components/award-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JjypNryv", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Award\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"awardFormShown\"]]],null,4,3],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"awardFormShown\"]]],null,2,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Award title\",\"col s12 m6\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Award title VN\",\"col s12 m6\"]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Award description\",[\"get\",[\"model\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Award description VN\",[\"get\",[\"model\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"saveAward\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s8\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Create new award\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newAward\",\"title\"]],\"Award title\",\"col s12 m6\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newAward\",\"titleVn\"]],\"Award title VN\",\"col s12 m6\"]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"newAward\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description VN\",[\"get\",[\"newAward\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addNewAward\"]],[\"flush-element\"],[\"text\",\"Create award\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary disabled\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addNewAward\"]],[\"flush-element\"],[\"text\",\"Create award\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary red\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"closeForm\"]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/award-form/template.hbs" } });
});
define('minh-ha-foods/components/banner-image/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    toggleLang: _ember['default'].inject.service(),
    showViet: false,

    // didInsertElement(){
    //   this.$('.banner-image').hide().fadeIn(2000);
    // },

    actions: {
      toggleViet: function toggleViet(lang) {
        this.toggleProperty('showViet');
        this.sendAction('toggleViet');
      }
    }
  });
});
define("minh-ha-foods/components/banner-image/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "+N56jbmb", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"bannerType\"]],\"main\"],null]],null,3],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"bannerType\"]],\"dish\"],null]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"banner-image chef-banner\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"img-responsive\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"model\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleViet\"]],[\"flush-element\"],[\"text\",\"VN\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"toggleViet\"]],[\"flush-element\"],[\"text\",\"EN\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"banner-image\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"src\",\"https://i.imgur.com/pnIcY0O.png\"],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"showViet\"]]],null,2],[\"block\",[\"if\"],[[\"helper\",[\"not\"],[[\"get\",[\"showViet\"]]],null]],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/banner-image/template.hbs" } });
});
define('minh-ha-foods/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _emberBasicDropdownComponentsBasicDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdown['default'];
    }
  });
});
define('minh-ha-foods/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _emberBasicDropdownComponentsBasicDropdownContentElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContentElement['default'];
    }
  });
});
define('minh-ha-foods/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _emberBasicDropdownComponentsBasicDropdownContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownContent['default'];
    }
  });
});
define('minh-ha-foods/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _emberBasicDropdownComponentsBasicDropdownTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBasicDropdownComponentsBasicDropdownTrigger['default'];
    }
  });
});
define('minh-ha-foods/components/category-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    actions: {
      save: function save(data) {
        this.sendAction('update', data);
      }
    }
  });
});
define("minh-ha-foods/components/category-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "WDwoBXBS", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Product Categories\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"formShown\"]]],null,2,1],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel large\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"catType\"]],\"Category\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"catTypeVn\"]],\"Category VN\",\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addNew\"]],[\"flush-element\"],[\"text\",\"Create product\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary disabled\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"addNew\"]],[\"flush-element\"],[\"text\",\"Create product\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary red\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"closeForm\"]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/category-form/template.hbs" } });
});
define('minh-ha-foods/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('minh-ha-foods/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('minh-ha-foods/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('minh-ha-foods/components/hamburger-menu/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define("minh-ha-foods/components/hamburger-menu/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "dd+ntr0m", "block": "{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/hamburger-menu/template.hbs" } });
});
define('minh-ha-foods/components/home-page/about-section/component', ['exports', 'ember', 'ember-in-viewport'], function (exports, _ember, _emberInViewport) {
  exports['default'] = _ember['default'].Component.extend(_emberInViewport['default'], {
    store: _ember['default'].inject.service(),
    toggleLang: _ember['default'].inject.service(),
    // isHistory: true,
    // isWhyUs: false,
    // isAwards: false,
    awardShowing: false,
    selectedContent: [],

    actions: {
      showSelectedContent: function showSelectedContent(selection) {
        this.set('awardShowing', false);
        this.set('selectedContent', selection);
      },
      showAwards: function showAwards() {
        this.set('awardShowing', true);
        _ember['default'].$('body').css('overflow-y', 'hidden');
      },
      closeModal: function closeModal() {
        this.set('awardShowing', false);
        _ember['default'].$('body').css('overflow-y', 'scroll');
      }
    }
  });
});
define("minh-ha-foods/components/home-page/about-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Qyoz3vRL", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"about-us\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about-container container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"static-attr\",\"id\",\"about-section\"],[\"flush-element\"],[\"text\",\"Welcome to\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,16,15],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about-us\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"link-button center-align\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,14,13],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"append\",[\"helper\",[\"home-page/image-row\"],null,[[\"aboutSection\"],[[\"get\",[\"aboutSection\"]]]]],false],[\"text\",\"\\n\\n\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"awardShowing\"]]],null,12,2],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"selectedContent\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"selectedContent\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,1,0]],\"locals\":[]},{\"statements\":[[\"text\",\"                    \"],[\"append\",[\"unknown\",[\"s\",\"description\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                    \"],[\"append\",[\"unknown\",[\"s\",\"descriptionVn\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,4,3]],\"locals\":[]},{\"statements\":[[\"text\",\"                  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"truncate\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"s\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"truncate\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"s\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,7,6]],\"locals\":[]},{\"statements\":[[\"block\",[\"md-card-content\"],null,null,8],[\"text\",\"\\n\"],[\"block\",[\"md-card-reveal\"],null,null,5],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m6\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"md-card\"],null,[[\"title\",\"image\",\"activator\"],[[\"get\",[\"s\",\"title\"]],[\"get\",[\"s\",\"imageUrl\"]],true]],9],[\"text\",\"          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"s\"]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content center-align\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"Our Awards\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"awards\"]]],null,10],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"md-modal\"],null,[[\"id\",\"close\",\"class\"],[\"award-modal\",\"closeModal\",\"award-modal\"]],11]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sub-nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSelectedContent\",[\"get\",[\"history\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"history\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sub-nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSelectedContent\",[\"get\",[\"whyU\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"whyU\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sub-nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showAwards\",[\"get\",[\"awards\"]]]],[\"flush-element\"],[\"text\",\"Awards\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sub-nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSelectedContent\",[\"get\",[\"history\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"history\",\"titleVn\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sub-nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSelectedContent\",[\"get\",[\"whyU\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"whyU\",\"titleVn\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"sub-nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showAwards\",[\"get\",[\"awards\"]]]],[\"flush-element\"],[\"text\",\"Awards\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"aboutSection\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"paragraph-font flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"aboutSection\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"aboutSection\",\"titleVn\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"paragraph-font flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"aboutSection\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/about-section/template.hbs" } });
});
define('minh-ha-foods/components/home-page/chef-section/component', ['exports', 'ember', 'ember-in-viewport'], function (exports, _ember, _emberInViewport) {
  exports['default'] = _ember['default'].Component.extend(_emberInViewport['default'], {
    cat: [],
    // selectedCat: null,
    toggleLang: _ember['default'].inject.service(),

    selectedContent: _ember['default'].computed.filter('cat', function (item) {
      // if (this.get('selectedCat') === null) {
      //   return true;
      // }
      console.log(item);
      return item;
    }).property('cat'),

    actions: {
      showSelectedContent: function showSelectedContent(category) {
        var dishes = category.get('dishes');
        this.set('cat', dishes);
      } //showProducts
    }
  });
});
define("minh-ha-foods/components/home-page/chef-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "aAI9WbRb", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"id\",\"chef-section\"],[\"static-attr\",\"class\",\"chef-section\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"chef-container container\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,3,2],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"image-row row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"chefCategories\"]]],null,1],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4 product-column\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-card hoverable\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"product-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"cat\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hover-info\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"center-align chef-category-name flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"cat\",\"catType\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"chef-dishes\",[\"get\",[\"cat\"]]],null,0]],\"locals\":[\"cat\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"chefSection\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"paragraph-font flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"chefSection\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"chefSection\",\"titleVn\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"paragraph-font flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"chefSection\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/chef-section/template.hbs" } });
});
define('minh-ha-foods/components/home-page/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('minh-ha-foods/components/home-page/contact-page/component', ['exports', 'ember', 'ember-in-viewport'], function (exports, _ember, _emberInViewport) {
  exports['default'] = _ember['default'].Component.extend(_emberInViewport['default'], {
    router: _ember['default'].inject.service(),

    didEnterViewport: function didEnterViewport() {
      this.$('.contact-section').toggle(2000);
    },

    actions: {
      scrollTo: function scrollTo(section, transition, model) {
        if (section === null) {
          this.get('router').transitionTo(transition, model);
        } else {
          var target = _ember['default'].$(section);
          console.log(target);
          event.preventDefault();
          _ember['default'].$('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000);
          console.log("done");
        }
      }
    }
    // chefCat: [],
    // productCat: [],
    //
    // loadCategories: function(){
    //    this.get('categories').forEach((item) => {
    //     if (item.data.categorizableType === 'ChefSection') {
    //       this.get('chefCat').pushObject(item);
    //     } else {
    //       this.get('productCat').pushObject(item);
    //     }
    //   });
    // }.on('init'),
  });
});
define("minh-ha-foods/components/home-page/contact-page/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ywXt63ld", "block": "{\"statements\":[[\"text\",\"\\n\\n\"],[\"open-element\",\"footer\",[]],[\"static-attr\",\"id\",\"contact-section\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 scroll-to-top wrapper center-align\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn scroll-to-top\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#navbar\"]],[\"flush-element\"],[\"text\",\"^\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"contact-section white-text hidden\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m6 offset-m3\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col m2\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"text\",\"About Us\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#about-section\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"history\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#about-section\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"whyU\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#about-section\"]],[\"flush-element\"],[\"text\",\"Awards\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col m2\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"text\",\"Products\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"productCategories\"]]],null,3],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col m2\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"text\",\"Recipes\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"chefCategories\"]]],null,2],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col m2\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"text\",\"Latest News\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"newsPosts\"]]],null,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col m4\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h6\",[]],[\"flush-element\"],[\"text\",\"Contact Us\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contact\",\"companyName\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Hotline: \"],[\"append\",[\"unknown\",[\"contact\",\"hotline\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Tel: \"],[\"append\",[\"unknown\",[\"contact\",\"tel\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"text\",\"Fax: \"],[\"append\",[\"unknown\",[\"contact\",\"fax\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"news\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"news\"]},{\"statements\":[[\"append\",[\"unknown\",[\"d\",\"catType\"]],false]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"chef-dishes\",[\"get\",[\"d\"]]],[[\"class\"],[\"chef-footer-link\"]],1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"d\"]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"li\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#product-section\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"p\",\"catType\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"p\"]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/contact-page/template.hbs" } });
});
define('minh-ha-foods/components/home-page/image-row/component', ['exports', 'ember', 'ember-in-viewport'], function (exports, _ember, _emberInViewport) {
  exports['default'] = _ember['default'].Component.extend(_emberInViewport['default'], {});
});
define("minh-ha-foods/components/home-page/image-row/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NG2H2zq5", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row image-row\"],[\"flush-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about-card\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"about-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"aboutSection\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about-card\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"about-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"aboutSection\",\"imageUrl2\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"about-card\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"about-image\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"aboutSection\",\"imageUrl3\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/image-row/template.hbs" } });
});
define('minh-ha-foods/components/home-page/news-section/component', ['exports', 'ember', 'ember-in-viewport'], function (exports, _ember, _emberInViewport) {
  exports['default'] = _ember['default'].Component.extend(_emberInViewport['default'], {
    toggleLang: _ember['default'].inject.service(),

    didEnterViewport: function didEnterViewport() {
      this.$('.news-section').toggle(2000);
    }
  });
});
define("minh-ha-foods/components/home-page/news-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8hBN8TU0", "block": "{\"statements\":[[\"open-element\",\"span\",[]],[\"static-attr\",\"id\",\"news-section\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"section\",[]],[\"static-attr\",\"class\",\"news-section hidden\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-section-container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"text\",\"Our Network\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,5,4],[\"text\",\"    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row center-align\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"newsPosts\"]]],null,3],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"news-description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"titleVn\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"news-description\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel news-date-badge badge\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"newsDate\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"news-card hoverable\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"post\",\"newsDate\"]]],null,2],[\"text\",\"          \"],[\"append\",[\"helper\",[\"lazy-image\"],null,[[\"url\",\"class\"],[[\"get\",[\"post\",\"imageUrl\"]],\"news-image\"]]],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"center-align\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,1,0],[\"text\",\"        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"post\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"newsSection\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"newsSection\",\"titleVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/news-section/template.hbs" } });
});
define('minh-ha-foods/components/home-page/product-section/component', ['exports', 'ember', 'ember-in-viewport'], function (exports, _ember, _emberInViewport) {
  exports['default'] = _ember['default'].Component.extend(_emberInViewport['default'], {
    toggleLang: _ember['default'].inject.service(),

    selectedCat: null,
    modalIsOpen: false,
    displayedObject: {},

    sortedSelected: _ember['default'].computed.sort('products', 'sortProperty'),
    sortProperty: ['title:asc'],

    didEnterViewport: function didEnterViewport() {
      this.$('.product-section-container').toggle(1000);
      this.$('.product-section').toggle(1500);
    },

    selectedContent: _ember['default'].computed.filter('sortedSelected', function (item) {
      if (this.get('selectedCat') === null) {
        return true;
      }
      return item.get('productCategory.id') === this.get('selectedCat');
    }).property('selectedCat'),

    actions: {
      showSelectedContent: function showSelectedContent(category) {
        if (category) {
          this.set('selectedCat', category.id);
        } else {
          this.set('selectedCat', null);
        }
      }, //showProducts
      showModal: function showModal(object) {
        this.set('modalIsOpen', true);
        this.set('displayedObject', object);
        _ember['default'].$('body').css('overflow-y', 'hidden');
      },
      closeModal: function closeModal() {
        this.set('modalIsOpen', false);
        _ember['default'].$('body').css('overflow-y', 'scroll');
      }
    }
  });
});
define("minh-ha-foods/components/home-page/product-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "1tvZElu/", "block": "{\"statements\":[[\"open-element\",\"section\",[]],[\"static-attr\",\"id\",\"product-section\"],[\"static-attr\",\"class\",\"our-products\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-section-container container hidden\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,7,6],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-section link-button hidden\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSelectedContent\"]],[\"flush-element\"],[\"text\",\"All\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"productCategories\"]]],null,5],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-image-row row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"selectedContent\"]]],null,4],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"modalIsOpen\"]]],null,3],[\"text\",\"  \"],[\"comment\",\" Adds flex box here to dynamically populate the the box with products without breaking layout\"],[\"text\",\"\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                \"],[\"append\",[\"unknown\",[\"displayedObject\",\"details\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"                \"],[\"append\",[\"unknown\",[\"displayedObject\",\"detailsVn\"]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content center-align\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m6\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"s12\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"image-thumb\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"displayedObject\",\"imageUrl\"]]]]],[\"static-attr\",\"alt\",\"\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n                \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel center-align flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"displayedObject\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n                  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Volume: \"],[\"append\",[\"unknown\",[\"displayedObject\",\"volume\"]],false],[\"text\",\" mL\"],[\"close-element\"],[\"text\",\"\\n                \"],[\"close-element\"],[\"text\",\"\\n              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m6\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-details\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"toggleLang\",\"showViet\"]]],null,1,0],[\"text\",\"              \"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"md-modal\"],null,[[\"close\",\"class\"],[\"closeModal\",\"test-modal\"]],2]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s6 m4 product-column\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showModal\",[\"get\",[\"pro\"]]]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"product-card hoverable\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"lazy-image\"],null,[[\"url\",\"class\"],[[\"get\",[\"pro\",\"imageUrl\"]],\"product-image\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hover-info\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"center-align flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"pro\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"pro\"]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showSelectedContent\",[\"get\",[\"cat\"]]]],[\"flush-element\"],[\"append\",[\"unknown\",[\"cat\",\"catType\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"cat\"]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"productSection\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"paragraph-font flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"productSection\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"section-heading\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"productSection\",\"titleVn\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"flush-element\"],[\"text\",\"♡\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"paragraph-font flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"productSection\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/product-section/template.hbs" } });
});
define("minh-ha-foods/components/home-page/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "HcI/TkM3", "block": "{\"statements\":[],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/home-page/template.hbs" } });
});
define('minh-ha-foods/components/input-fields/email-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define("minh-ha-foods/components/input-fields/email-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6s+8/oHR", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-fields/email-input/template.hbs" } });
});
define('minh-ha-foods/components/input-fields/password-confirmation-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define("minh-ha-foods/components/input-fields/password-confirmation-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rKgrIg2m", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-fields/password-confirmation-input/template.hbs" } });
});
define('minh-ha-foods/components/input-fields/password-input/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define("minh-ha-foods/components/input-fields/password-input/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DkzY+1Kd", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"kind\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-fields/password-input/template.hbs" } });
});
define('minh-ha-foods/components/input-fields/section-inputs/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    actions: {
      save: function save() {
        this.sendAction('save', this.get('model'));
        console.log(this.get('model.data'));
      }
    }
  });
});
define("minh-ha-foods/components/input-fields/section-inputs/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9J1RZfv0", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Title: \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"value\"],[\"text\",[\"get\",[\"model\",\"title\"]]]]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Description: \"],[\"append\",[\"helper\",[\"textarea\"],null,[[\"type\",\"value\"],[\"text\",[\"get\",[\"model\",\"description\"]]]]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-fields/section-inputs/template.hbs" } });
});
define('minh-ha-foods/components/input-form/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newObject: {},
    isCatFormShown: false,
    isFormShown: false,
    isAwardFormShown: false,
    // showForm: null,
    actions: {
      save: function save() {
        this.sendAction('save', this.get('newObject'));
        this.set('newObject', {});
        this.set('isFormShown', false);
      },
      update: function update(data) {
        // console.log(data);
        this.sendAction('update', data);
        this.set('newObject', {});
      },
      'new': function _new() {
        this.set('isFormShown', true);
        this.set('newObject', {});
        // this.set('showForm', whichForm);
      },
      closeForm: function closeForm() {
        this.set('isFormShown', false);
        this.set('newObject', {});
      },
      'delete': function _delete(data) {
        this.sendAction('delete', data);
      }
    }
  });
});
define('minh-ha-foods/components/input-form/inputs-section/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("minh-ha-foods/components/input-form/inputs-section/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/NMrN/Pb", "block": "{\"statements\":[[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"valueTitle\"]],[\"get\",[\"title\"]],\"col s12 m6\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"valueTitleVn\"]],[\"get\",[\"titleVn\"]],\"col s12 m6\"]]],false],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[[\"get\",[\"description\"]],[\"get\",[\"valueDescription\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[[\"get\",[\"descriptionVn\"]],[\"get\",[\"valueDescriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"valueImageUrl\"]],\"Image URL\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/inputs-section/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-award/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("minh-ha-foods/components/input-form/new-award/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "SzbRiBFN", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"New Award\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"title\"]],\"Award Title\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"titleVn\"]],\"Award VN\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Details\",[\"get\",[\"newObject\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Details VN\",[\"get\",[\"newObject\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"imageUrl\",[\"get\",[\"newObject\",\"imageUrl\"]],\"col s12\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-award/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("minh-ha-foods/components/input-form/new-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "RKVIKdPN", "block": "{\"statements\":[[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"cardFormName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"title\"]],[\"get\",[\"newCardTitle\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"titleVn\"]],[\"get\",[\"newCardTitleVn\"]],\"col s12\"]]],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[[\"get\",[\"newDescription\"]],[\"get\",[\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[[\"get\",[\"newDescriptionVn\"]],[\"get\",[\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-card/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-chef-category/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("minh-ha-foods/components/input-form/new-chef-category/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NflEB4jT", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"New Recipe Category\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"catType\"]],\"Category Name\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"catTypeVn\"]],\"Category VN\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"newObject\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Details VN\",[\"get\",[\"newObject\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"imageUrl\"]],\"Image Url\",\"col s12\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-chef-category/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-dish/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    category: null,

    actions: {
      chooseCategory: function chooseCategory(category) {
        this.set('category', category);
        this.set('newObject.chefCategory', category);
        console.log(category.id);
        // this.calculateRoute();
        // this.updatePrice();
      }
    }
  });
});
define("minh-ha-foods/components/input-form/new-dish/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "x8KyR/yK", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"New Receipe\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row \"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"title\"]],\"Dish name\",\"col s12 m6\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"titleVn\"]],\"Dish name VN\",\"col s12 m6\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"youtubeLink\"]],\"Video Link\",\"col s6\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"power-select\"],null,[[\"selected\",\"options\",\"searchField\",\"onchange\"],[[\"get\",[\"category\"]],[\"get\",[\"categories\"]],\"catType\",[\"helper\",[\"action\"],[[\"get\",[null]],\"chooseCategory\"],null]]],0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Details\",[\"get\",[\"newObject\",\"details\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Details VN\",[\"get\",[\"newObject\",\"detailsVn\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"imageUrl\"]],\"Image Url\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"unknown\",[\"category\",\"catType\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-dish/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-post/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("minh-ha-foods/components/input-form/new-post/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qWCXZNAG", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"cardFormName\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"title\"]],\"News Title\",\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"titleVn\"]],\"Title Vn\",\"col s12\"]]],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Body\",[\"get\",[\"newObject\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Body Vn\",[\"get\",[\"newObject\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"label\",\"value\",\"class\"],[\"Image Url\",[\"get\",[\"newObject\",\"imageUrl\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input-date\"],null,[[\"label\",\"value\",\"class\"],[\"News Date\",[\"get\",[\"newObject\",\"newsDate\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-post/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-product-category/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("minh-ha-foods/components/input-form/new-product-category/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VP3xQQa2", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"New Product Category\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"catType\"]],\"Category Name\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"catTypeVn\"]],\"Category VN\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"newObject\",\"description\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Details VN\",[\"get\",[\"newObject\",\"descriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-product-category/template.hbs" } });
});
define('minh-ha-foods/components/input-form/new-product/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    category: null,

    actions: {
      chooseCategory: function chooseCategory(category) {
        this.set('category', category);
        this.set('newObject.productCategory', category);
        console.log(category.id);
        // this.calculateRoute();
        // this.updatePrice();
      }
    }
  });
});
define("minh-ha-foods/components/input-form/new-product/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "r6CCoeqG", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"text\",\"New Product\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row \"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"title\"]],\"Product name\",\"col s12 m6\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"titleVn\"]],\"Product name VN\",\"col s12 m6\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"volume\"]],\"Volume\",\"col s6\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"metric\"]],\"Volume VN\",\"col s6\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"power-select\"],null,[[\"selected\",\"options\",\"searchField\",\"onchange\"],[[\"get\",[\"category\"]],[\"get\",[\"categories\"]],\"catType\",[\"helper\",[\"action\"],[[\"get\",[null]],\"chooseCategory\"],null]]],0],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description\",[\"get\",[\"newObjectdescription\"]],\"col s12\"]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"label\",\"value\",\"class\"],[\"Description VN\",[\"get\",[\"newObjectdescriptionVn\"]],\"col s12\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"newObject\",\"imageUrl\"]],\"Image Url\",\"col s12\"]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"unknown\",[\"category\",\"catType\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"category\"]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/new-product/template.hbs" } });
});
define("minh-ha-foods/components/input-form/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "v2LR3FH/", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container center-align\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"flow-text\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"cardTitle\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isFormShown\"]]],null,20,19],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Form to add new stuff\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isFormShown\"]]],null,18],[\"text\",\"\\n\\n\"],[\"comment\",\"chef-category card\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"chefCatForm\"],null]],null,11],[\"comment\",\"/.Chef category cards\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Category cards\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"catForm\"],null]],null,9],[\"comment\",\"/.category cards\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Award cards\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"awardForm\"],null]],null,7],[\"comment\",\"/.award cards\"],[\"text\",\"\\n\\n\\n\"],[\"comment\",\"Product cards\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"productForm\"],null]],null,5],[\"comment\",\"/.product cards\"],[\"text\",\"\\n\\n\\n\"],[\"comment\",\"Chef cards\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"dishForm\"],null]],null,3],[\"comment\",\"/.chef cards\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Post cards\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"postForm\"],null]],null,1],[\"comment\",\"/.news post cards\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"titleVn\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"newsDate\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"descriptionVn\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row image-url\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"imageUrl\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Dish name\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Dish VN\",\"col s12 m6\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"details\"]],\"Details\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"detailsVn\"]],\"Details VN\",\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"youtubeLink\"]],\"Video\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"imageUrl\"]],\"Image Url\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Category: \"],[\"append\",[\"unknown\",[\"model\",\"chefCategory\",\"catType\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"dishes\"]]],null,2],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"title\"]],\"Product name\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"titleVn\"]],\"Product name VN\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"volume\"]],\"Volume\",\"col s6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"metric\"]],\"Volume VN\",\"col s6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"details\"]],\"Details\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"detailsVn\"]],\"Details VN\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Category: \"],[\"append\",[\"unknown\",[\"model\",\"productCategory\",\"catType\"]],false],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"imageUrl\"]],\"Image Url\",\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"products\"]]],null,4],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n\\n      \"],[\"append\",[\"helper\",[\"input-form/inputs-section\"],null,[[\"valueTitle\",\"valueTitleVn\",\"valueDescription\",\"valueDescriptionVn\",\"valueImageUrl\",\"cardTitle\",\"title\",\"titleVn\",\"description\",\"descriptionVn\"],[[\"get\",[\"model\",\"title\"]],[\"get\",[\"model\",\"titleVn\"]],[\"get\",[\"model\",\"description\"]],[\"get\",[\"model\",\"descriptionVn\"]],[\"get\",[\"model\",\"imageUrl\"]],\"Awards\",\"Award name\",\"Award name VN\",\"Description\",\"Description VN\"]]],false],[\"text\",\"\\n\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,6],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"catType\"]],\"Category name\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"cateTypeVn\"]],\"Category Vn\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"description\"]],\"Description\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"descriptionVn\"]],\"Description Vn\",\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,8],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m4\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-panel small\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"catType\"]],\"Category name\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-input\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"cateTypeVn\"]],\"Category Vn\",\"col s12 m6\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"description\"]],\"Description\",\"col s12\"]]],false],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"descriptionVn\"]],\"Description Vn\",\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"md-textarea\"],null,[[\"value\",\"label\",\"class\"],[[\"get\",[\"model\",\"imageUrl\"]],\"Image Url\",\"col s12\"]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn teal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"update\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"static-attr\",\"class\",\"btn red\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"model\"]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,10],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"input-form/new-post\"],null,[[\"cardFormName\",\"newObject\",\"model\"],[\"Add a new post\",[\"get\",[\"newObject\"]],[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"input-form/new-dish\"],null,[[\"newObject\",\"categories\"],[[\"get\",[\"newObject\"]],[\"get\",[\"categories\"]]]]],false],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"input-form/new-product\"],null,[[\"newObject\",\"categories\"],[[\"get\",[\"newObject\"]],[\"get\",[\"categories\"]]]]],false],[\"text\",\"\\n\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"append\",[\"helper\",[\"input-form/new-award\"],null,[[\"newObject\"],[[\"get\",[\"newObject\"]]]]],false],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"input-form/new-chef-category\"],null,[[\"newObject\"],[[\"get\",[\"newObject\"]]]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"input-form/new-product-category\"],null,[[\"newObject\"],[[\"get\",[\"newObject\"]]]]],false],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\"]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"new-form container\"],[\"flush-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Product category form\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"catForm\"],null]],null,17],[\"text\",\"\\n\"],[\"comment\",\"Chef-category form\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"chefCatForm\"],null]],null,16],[\"text\",\"\\n\"],[\"comment\",\"About section Award form\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"awardForm\"],null]],null,15],[\"comment\",\" /.About section award form\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Product form\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"productForm\"],null]],null,14],[\"comment\",\"/.product category form\"],[\"text\",\"\\n\\n\"],[\"comment\",\"Dish form\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"dishForm\"],null]],null,13],[\"comment\",\"/.dish form\"],[\"text\",\"\\n\\n\"],[\"comment\",\"new post form\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"helper\",[\"eq\"],[[\"get\",[\"whichForm\"]],\"postForm\"],null]],null,12],[\"comment\",\"/.new post form\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\" \"],[\"comment\",\"new-form container\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"new\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"newButton\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary disabled\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"new\"]],[\"flush-element\"],[\"append\",[\"unknown\",[\"newButton\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary red\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"closeForm\"]],[\"flush-element\"],[\"text\",\"X\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/input-form/template.hbs" } });
});
define('minh-ha-foods/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define('minh-ha-foods/components/lazy-background-image', ['exports', 'ember-lazy-image/components/lazy-background-image'], function (exports, _emberLazyImageComponentsLazyBackgroundImage) {
  exports['default'] = _emberLazyImageComponentsLazyBackgroundImage['default'];
});
define('minh-ha-foods/components/lazy-image', ['exports', 'ember-lazy-image/components/lazy-image'], function (exports, _emberLazyImageComponentsLazyImage) {
  exports['default'] = _emberLazyImageComponentsLazyImage['default'];
});
define('minh-ha-foods/components/materialize-badge', ['exports', 'ember', 'minh-ha-foods/components/md-badge'], function (exports, _ember, _minhHaFoodsComponentsMdBadge) {
  exports['default'] = _minhHaFoodsComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-button-submit', ['exports', 'ember', 'minh-ha-foods/components/md-btn-submit'], function (exports, _ember, _minhHaFoodsComponentsMdBtnSubmit) {
  exports['default'] = _minhHaFoodsComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-button', ['exports', 'ember', 'minh-ha-foods/components/md-btn'], function (exports, _ember, _minhHaFoodsComponentsMdBtn) {
  exports['default'] = _minhHaFoodsComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-card-action', ['exports', 'ember', 'minh-ha-foods/components/md-card-action'], function (exports, _ember, _minhHaFoodsComponentsMdCardAction) {
  exports['default'] = _minhHaFoodsComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-card-content', ['exports', 'ember', 'minh-ha-foods/components/md-card-content'], function (exports, _ember, _minhHaFoodsComponentsMdCardContent) {
  exports['default'] = _minhHaFoodsComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-card-panel', ['exports', 'ember', 'minh-ha-foods/components/md-card-panel'], function (exports, _ember, _minhHaFoodsComponentsMdCardPanel) {
  exports['default'] = _minhHaFoodsComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-card-reveal', ['exports', 'ember', 'minh-ha-foods/components/md-card-reveal'], function (exports, _ember, _minhHaFoodsComponentsMdCardReveal) {
  exports['default'] = _minhHaFoodsComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-card', ['exports', 'ember', 'minh-ha-foods/components/md-card'], function (exports, _ember, _minhHaFoodsComponentsMdCard) {
  exports['default'] = _minhHaFoodsComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-checkbox', ['exports', 'ember', 'minh-ha-foods/components/md-check'], function (exports, _ember, _minhHaFoodsComponentsMdCheck) {
  exports['default'] = _minhHaFoodsComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-checkboxes', ['exports', 'ember', 'minh-ha-foods/components/md-checks'], function (exports, _ember, _minhHaFoodsComponentsMdChecks) {
  exports['default'] = _minhHaFoodsComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-collapsible-card', ['exports', 'ember', 'minh-ha-foods/components/md-card-collapsible'], function (exports, _ember, _minhHaFoodsComponentsMdCardCollapsible) {
  exports['default'] = _minhHaFoodsComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-collapsible', ['exports', 'ember', 'minh-ha-foods/components/md-collapsible'], function (exports, _ember, _minhHaFoodsComponentsMdCollapsible) {
  exports['default'] = _minhHaFoodsComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-copyright', ['exports', 'ember', 'minh-ha-foods/components/md-copyright'], function (exports, _ember, _minhHaFoodsComponentsMdCopyright) {
  exports['default'] = _minhHaFoodsComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-date-input', ['exports', 'ember', 'minh-ha-foods/components/md-input-date'], function (exports, _ember, _minhHaFoodsComponentsMdInputDate) {
  exports['default'] = _minhHaFoodsComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-input-field', ['exports', 'ember', 'minh-ha-foods/components/md-input-field'], function (exports, _ember, _minhHaFoodsComponentsMdInputField) {
  exports['default'] = _minhHaFoodsComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-input', ['exports', 'ember', 'minh-ha-foods/components/md-input'], function (exports, _ember, _minhHaFoodsComponentsMdInput) {
  exports['default'] = _minhHaFoodsComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-loader', ['exports', 'ember', 'minh-ha-foods/components/md-loader'], function (exports, _ember, _minhHaFoodsComponentsMdLoader) {
  exports['default'] = _minhHaFoodsComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-modal', ['exports', 'ember', 'minh-ha-foods/components/md-modal'], function (exports, _ember, _minhHaFoodsComponentsMdModal) {
  exports['default'] = _minhHaFoodsComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-navbar', ['exports', 'ember', 'minh-ha-foods/components/md-navbar'], function (exports, _ember, _minhHaFoodsComponentsMdNavbar) {
  exports['default'] = _minhHaFoodsComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-pagination', ['exports', 'ember', 'minh-ha-foods/components/md-pagination'], function (exports, _ember, _minhHaFoodsComponentsMdPagination) {
  exports['default'] = _minhHaFoodsComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-parallax', ['exports', 'ember', 'minh-ha-foods/components/md-parallax'], function (exports, _ember, _minhHaFoodsComponentsMdParallax) {
  exports['default'] = _minhHaFoodsComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-radio', ['exports', 'ember', 'minh-ha-foods/components/md-radio'], function (exports, _ember, _minhHaFoodsComponentsMdRadio) {
  exports['default'] = _minhHaFoodsComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-radios', ['exports', 'ember', 'minh-ha-foods/components/md-radios'], function (exports, _ember, _minhHaFoodsComponentsMdRadios) {
  exports['default'] = _minhHaFoodsComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-range', ['exports', 'ember', 'minh-ha-foods/components/md-range'], function (exports, _ember, _minhHaFoodsComponentsMdRange) {
  exports['default'] = _minhHaFoodsComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-select', ['exports', 'ember', 'minh-ha-foods/components/md-select'], function (exports, _ember, _minhHaFoodsComponentsMdSelect) {
  exports['default'] = _minhHaFoodsComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-switch', ['exports', 'ember', 'minh-ha-foods/components/md-switch'], function (exports, _ember, _minhHaFoodsComponentsMdSwitch) {
  exports['default'] = _minhHaFoodsComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-switches', ['exports', 'ember', 'minh-ha-foods/components/md-switches'], function (exports, _ember, _minhHaFoodsComponentsMdSwitches) {
  exports['default'] = _minhHaFoodsComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-tabs-tab', ['exports', 'ember', 'minh-ha-foods/components/md-tab'], function (exports, _ember, _minhHaFoodsComponentsMdTab) {
  exports['default'] = _minhHaFoodsComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-tabs', ['exports', 'ember', 'minh-ha-foods/components/md-tabs'], function (exports, _ember, _minhHaFoodsComponentsMdTabs) {
  exports['default'] = _minhHaFoodsComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/materialize-textarea', ['exports', 'ember', 'minh-ha-foods/components/md-textarea'], function (exports, _ember, _minhHaFoodsComponentsMdTextarea) {
  exports['default'] = _minhHaFoodsComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('minh-ha-foods/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _emberCliMaterializeComponentsMdBadge) {
  exports['default'] = _emberCliMaterializeComponentsMdBadge['default'];
});
define('minh-ha-foods/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _emberCliMaterializeComponentsMdBtnDropdown) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnDropdown['default'];
});
define('minh-ha-foods/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _emberCliMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnSubmit['default'];
});
define('minh-ha-foods/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'];
});
define('minh-ha-foods/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _emberCliMaterializeComponentsMdCardAction) {
  exports['default'] = _emberCliMaterializeComponentsMdCardAction['default'];
});
define('minh-ha-foods/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _emberCliMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCardCollapsible['default'];
});
define('minh-ha-foods/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _emberCliMaterializeComponentsMdCardContent) {
  exports['default'] = _emberCliMaterializeComponentsMdCardContent['default'];
});
define('minh-ha-foods/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _emberCliMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberCliMaterializeComponentsMdCardPanel['default'];
});
define('minh-ha-foods/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'];
});
define('minh-ha-foods/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  exports['default'] = _emberCliMaterializeComponentsMdCard['default'];
});
define('minh-ha-foods/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _emberCliMaterializeComponentsMdCheck) {
  exports['default'] = _emberCliMaterializeComponentsMdCheck['default'];
});
define('minh-ha-foods/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _emberCliMaterializeComponentsMdChecksCheck) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdChecksCheck['default'];
    }
  });
});
define('minh-ha-foods/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _emberCliMaterializeComponentsMdChecks) {
  exports['default'] = _emberCliMaterializeComponentsMdChecks['default'];
});
define('minh-ha-foods/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _emberCliMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCollapsible['default'];
});
define('minh-ha-foods/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _emberCliMaterializeComponentsMdCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdCollection['default'];
    }
  });
});
define('minh-ha-foods/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _emberCliMaterializeComponentsMdCopyright) {
  exports['default'] = _emberCliMaterializeComponentsMdCopyright['default'];
});
define('minh-ha-foods/components/md-default-collection-header', ['exports', 'ember-cli-materialize/components/md-default-collection-header'], function (exports, _emberCliMaterializeComponentsMdDefaultCollectionHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdDefaultCollectionHeader['default'];
    }
  });
});
define('minh-ha-foods/components/md-default-column-header', ['exports', 'ember-cli-materialize/components/md-default-column-header'], function (exports, _emberCliMaterializeComponentsMdDefaultColumnHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdDefaultColumnHeader['default'];
    }
  });
});
define('minh-ha-foods/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtn['default'];
    }
  });
});
define('minh-ha-foods/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtns) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtns['default'];
    }
  });
});
define('minh-ha-foods/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _emberCliMaterializeComponentsMdInputDate) {
  exports['default'] = _emberCliMaterializeComponentsMdInputDate['default'];
});
define('minh-ha-foods/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _emberCliMaterializeComponentsMdInputField) {
  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'];
});
define('minh-ha-foods/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _emberCliMaterializeComponentsMdInput) {
  exports['default'] = _emberCliMaterializeComponentsMdInput['default'];
});
define('minh-ha-foods/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _emberCliMaterializeComponentsMdLoader) {
  exports['default'] = _emberCliMaterializeComponentsMdLoader['default'];
});
define('minh-ha-foods/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _emberCliMaterializeComponentsMdModalContainer) {
  exports['default'] = _emberCliMaterializeComponentsMdModalContainer['default'];
});
define('minh-ha-foods/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _emberCliMaterializeComponentsMdModal) {
  exports['default'] = _emberCliMaterializeComponentsMdModal['default'];
});
define('minh-ha-foods/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _emberCliMaterializeComponentsMdNavbar) {
  exports['default'] = _emberCliMaterializeComponentsMdNavbar['default'];
});
define('minh-ha-foods/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _emberCliMaterializeComponentsMdPagination) {
  exports['default'] = _emberCliMaterializeComponentsMdPagination['default'];
});
define('minh-ha-foods/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _emberCliMaterializeComponentsMdParallax) {
  exports['default'] = _emberCliMaterializeComponentsMdParallax['default'];
});
define('minh-ha-foods/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _emberCliMaterializeComponentsMdRadio) {
  exports['default'] = _emberCliMaterializeComponentsMdRadio['default'];
});
define('minh-ha-foods/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _emberCliMaterializeComponentsMdRadiosRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdRadiosRadio['default'];
    }
  });
});
define('minh-ha-foods/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _emberCliMaterializeComponentsMdRadios) {
  exports['default'] = _emberCliMaterializeComponentsMdRadios['default'];
});
define('minh-ha-foods/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _emberCliMaterializeComponentsMdRange) {
  exports['default'] = _emberCliMaterializeComponentsMdRange['default'];
});
define('minh-ha-foods/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _emberCliMaterializeComponentsMdSelect) {
  exports['default'] = _emberCliMaterializeComponentsMdSelect['default'];
});
define('minh-ha-foods/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _emberCliMaterializeComponentsMdSwitch) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitch['default'];
});
define('minh-ha-foods/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _emberCliMaterializeComponentsMdSwitchesSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdSwitchesSwitch['default'];
    }
  });
});
define('minh-ha-foods/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _emberCliMaterializeComponentsMdSwitches) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitches['default'];
});
define('minh-ha-foods/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _emberCliMaterializeComponentsMdTab) {
  exports['default'] = _emberCliMaterializeComponentsMdTab['default'];
});
define('minh-ha-foods/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _emberCliMaterializeComponentsMdTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTableCol['default'];
    }
  });
});
define('minh-ha-foods/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _emberCliMaterializeComponentsMdTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTable['default'];
    }
  });
});
define('minh-ha-foods/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _emberCliMaterializeComponentsMdTabs) {
  exports['default'] = _emberCliMaterializeComponentsMdTabs['default'];
});
define('minh-ha-foods/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdTextarea) {
  exports['default'] = _emberCliMaterializeComponentsMdTextarea['default'];
});
define('minh-ha-foods/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('minh-ha-foods/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('minh-ha-foods/components/my-application/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    router: _ember['default'].inject.service(),

    // didEnterViewport(){
    //   Ember.$('section').hide().fadeIn(5000);
    // },

    isAdminModal: false,

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut()
        // .then(() => this.get('store').unloadAll())
        .then(function () {
          return _this.set('isAdminModal', false);
        }).then(function () {
          _ember['default'].$('body').css('overflow-y', 'scroll');
        }).then(function () {
          return Materialize.toast('You are signed out', 3000, 'blue');
        }).then(function () {
          return _this.get('router').transitionTo('index');
        }).then(function () {
          return _ember['default'].$('body').css('overflow-y', 'scroll');
        })['catch'](function () {
          return Materialize.toast('Error', 3000, 'red');
        });
      },
      goDashboard: function goDashboard() {
        var _this2 = this;

        return this.get('router').transitionTo('admin-route').then(function () {
          return _this2.set('isAdminModal', false);
        }).then(function () {
          _ember['default'].$('body').css('overflow-y', 'scroll');
        });
      },
      goReset: function goReset() {
        var _this3 = this;

        return this.get('router').transitionTo('change-password').then(function () {
          return _this3.set('isAdminModal', false);
        }).then(function () {
          _ember['default'].$('body').css('overflow-y', 'scroll');
        });
      },
      goIndex: function goIndex() {
        var _this4 = this;

        return this.get('router').transitionTo('index').then(function () {
          return _this4.set('isAdminModal', false);
        }).then(function () {
          _ember['default'].$('body').css('overflow-y', 'scroll');
        });
      },
      adminModal: function adminModal() {
        this.set('isAdminModal', true);
        _ember['default'].$('body').css('overflow-y', 'hidden');
      },
      closeModal: function closeModal() {
        _ember['default'].$('body').css('overflow-y', 'scroll');
        this.set('isAdminModal', false);
      }
    }
  });
});
define("minh-ha-foods/components/my-application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ag9fVWPW", "block": "{\"statements\":[[\"comment\",\"Admin Navigation tab\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,2],[\"block\",[\"if\"],[[\"get\",[\"isAdminModal\"]]],null,1],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content center-align\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn sign-in-button\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goDashboard\"]],[\"flush-element\"],[\"text\",\"Admin dashboard\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn sign-in-button\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goReset\"]],[\"flush-element\"],[\"text\",\"Reset password\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn sign-in-button index-button\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"goIndex\"]],[\"flush-element\"],[\"text\",\"Home\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"btn-flat red-text sign-out\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign out\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"md-modal\"],null,[[\"close\",\"class\"],[\"closeModal\",\"sign-in-modal\"]],0]],\"locals\":[]},{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default admin-navigation red\"],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"name\",\"button\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"adminModal\"]],[\"flush-element\"],[\"open-element\",\"i\",[]],[\"static-attr\",\"class\",\"material-icons\"],[\"flush-element\"],[\"text\",\"flip_to_front\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/my-application/template.hbs" } });
});
define('minh-ha-foods/components/navbar-header/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define("minh-ha-foods/components/navbar-header/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6l06HIbo", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"navbar-brand\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/navbar-header/template.hbs" } });
});
define('minh-ha-foods/components/navigation-bar/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    router: _ember['default'].inject.service(),
    language: _ember['default'].inject.service('language-toggle'),

    didInsertElement: function didInsertElement() {
      this.$('#navbar').toggle(2500);
    },

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      },
      linkToIndex: function linkToIndex() {
        this.get('router').transitionTo('application');
      },
      toggleLang: function toggleLang() {
        this.get('language').toggleLang();
      },
      //Main scroll to action
      scrollTo: function scrollTo(section) {
        this.get('router').transitionTo('index').then(function () {
          var target = _ember['default'].$(section);
          console.log(target);
          event.preventDefault();
          _ember['default'].$('html, body').stop().animate({
            scrollTop: target.offset().top
          }, 1000);
        });
      }
    }
  });
});
define("minh-ha-foods/components/navigation-bar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Qfe37UtG", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"nav-wrapper hidden\"],[\"static-attr\",\"id\",\"navbar\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"\"],[\"static-attr\",\"id\",\"logo\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"linkToIndex\"]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"comment\",\"Revise brando logo file to not have too much footprint\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"navbar-links right hide-on-small-only\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"text\",\"      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#about-section\"]],[\"flush-element\"],[\"text\",\"About Us\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#product-section\"]],[\"flush-element\"],[\"text\",\"Products\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#chef-section\"]],[\"flush-element\"],[\"text\",\"Chef Tips\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#news-section\"]],[\"flush-element\"],[\"text\",\"News\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-links\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"scrollTo\",\"#contact-section\"]],[\"flush-element\"],[\"text\",\"Contact Us\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/navigation-bar/template.hbs" } });
});
define('minh-ha-foods/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _emberPowerSelectComponentsPowerSelectMultiple) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultiple['default'];
    }
  });
});
define('minh-ha-foods/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectMultipleTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectMultipleTrigger['default'];
    }
  });
});
define('minh-ha-foods/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _emberPowerSelectComponentsPowerSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelect['default'];
    }
  });
});
define('minh-ha-foods/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _emberPowerSelectComponentsPowerSelectBeforeOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectBeforeOptions['default'];
    }
  });
});
define('minh-ha-foods/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _emberPowerSelectComponentsPowerSelectOptions) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectOptions['default'];
    }
  });
});
define('minh-ha-foods/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _emberPowerSelectComponentsPowerSelectPlaceholder) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectPlaceholder['default'];
    }
  });
});
define('minh-ha-foods/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _emberPowerSelectComponentsPowerSelectPowerSelectGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectPowerSelectGroup['default'];
    }
  });
});
define('minh-ha-foods/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _emberPowerSelectComponentsPowerSelectSearchMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectSearchMessage['default'];
    }
  });
});
define('minh-ha-foods/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _emberPowerSelectComponentsPowerSelectTrigger) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectComponentsPowerSelectTrigger['default'];
    }
  });
});
define('minh-ha-foods/components/product-modal/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    actions: {
      closeModal: function closeModal() {
        this.sendAction('closeModal');
      }
    }
  });
});
define("minh-ha-foods/components/product-modal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "S7nBk0cw", "block": "{\"statements\":[[\"text\",\"\\n\\n    \\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/product-modal/template.hbs" } });
});
define('minh-ha-foods/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('minh-ha-foods/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('minh-ha-foods/components/render-later/component', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var run = _ember['default'].run;
  exports['default'] = _ember['default'].Component.extend({
    tagName: '',

    wait: 0,
    shouldRender: false,
    _renderTimer: null,
    load: null,
    model: null,

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._renderTimer = run.later(function () {
        _this.get('load')().then(function (data) {
          if (!_this.get('isDestroyed')) {
            _this.set('shouldRender', true);
            _this.set('model', data);
          }
        });
      }, this.get('wait'));
    },

    willDestroy: function willDestroy() {
      this._super();
      run.cancel(this._renderTimer);
    }
  });
});
define("minh-ha-foods/components/render-later/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "afTLy4T3", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"shouldRender\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"yield\",\"default\",[[\"get\",[\"model\"]]]],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/components/render-later/template.hbs" } });
});
define('minh-ha-foods/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('minh-ha-foods/contact/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    companyName: _emberData['default'].attr('string'),
    companyNameVn: _emberData['default'].attr('string'),
    tel: _emberData['default'].attr('string'),
    fax: _emberData['default'].attr('string'),
    hotline: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string'),
    fbLink: _emberData['default'].attr('string')
  });
});
define('minh-ha-foods/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('minh-ha-foods/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('minh-ha-foods/dish/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    youtubeLink: _emberData['default'].attr('string'),
    details: _emberData['default'].attr('string'),
    detailsVn: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    // chefCategoryId: DS.attr('string'),
    chefCategory: _emberData['default'].belongsTo('chefCategory')
  });
});
define('minh-ha-foods/dish/serializer', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      chefCategory: { deserialize: 'records' }
    }
  });
});
define('minh-ha-foods/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('minh-ha-foods/helpers/and', ['exports', 'ember', 'ember-truth-helpers/helpers/and'], function (exports, _ember, _emberTruthHelpersHelpersAnd) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersAnd.andHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersAnd.andHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/app-version', ['exports', 'ember', 'minh-ha-foods/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _minhHaFoodsConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _minhHaFoodsConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('minh-ha-foods/helpers/bw-compat-icon', ['exports', 'ember-cli-materialize/helpers/bw-compat-icon'], function (exports, _emberCliMaterializeHelpersBwCompatIcon) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeHelpersBwCompatIcon['default'];
    }
  });
  Object.defineProperty(exports, 'bwCompatIcon', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeHelpersBwCompatIcon.bwCompatIcon;
    }
  });
});
define('minh-ha-foods/helpers/cancel-all', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.cancelHelper = cancelHelper;

  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      _ember['default'].assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _emberConcurrencyHelpers.taskHelperClosure)('cancel-all', 'cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports['default'] = _ember['default'].Helper.helper(cancelHelper);
});
define('minh-ha-foods/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('minh-ha-foods/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectHelpersEmberPowerSelectIsSelected) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('minh-ha-foods/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent['default'];
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function get() {
      return _emberPowerSelectHelpersEmberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('minh-ha-foods/helpers/eq', ['exports', 'ember', 'ember-truth-helpers/helpers/equal'], function (exports, _ember, _emberTruthHelpersHelpersEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersEqual.equalHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersEqual.equalHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/gt', ['exports', 'ember', 'ember-truth-helpers/helpers/gt'], function (exports, _ember, _emberTruthHelpersHelpersGt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGt.gtHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGt.gtHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/gte', ['exports', 'ember', 'ember-truth-helpers/helpers/gte'], function (exports, _ember, _emberTruthHelpersHelpersGte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersGte.gteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersGte.gteHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/is-after', ['exports', 'ember-moment/helpers/is-after'], function (exports, _emberMomentHelpersIsAfter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersIsAfter['default'];
    }
  });
});
define('minh-ha-foods/helpers/is-array', ['exports', 'ember', 'ember-truth-helpers/helpers/is-array'], function (exports, _ember, _emberTruthHelpersHelpersIsArray) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersIsArray.isArrayHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/is-before', ['exports', 'ember-moment/helpers/is-before'], function (exports, _emberMomentHelpersIsBefore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersIsBefore['default'];
    }
  });
});
define('minh-ha-foods/helpers/is-between', ['exports', 'ember-moment/helpers/is-between'], function (exports, _emberMomentHelpersIsBetween) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersIsBetween['default'];
    }
  });
});
define('minh-ha-foods/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _emberTruthHelpersHelpersIsEqual) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual['default'];
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function get() {
      return _emberTruthHelpersHelpersIsEqual.isEqual;
    }
  });
});
define('minh-ha-foods/helpers/is-same-or-after', ['exports', 'ember-moment/helpers/is-same-or-after'], function (exports, _emberMomentHelpersIsSameOrAfter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersIsSameOrAfter['default'];
    }
  });
});
define('minh-ha-foods/helpers/is-same-or-before', ['exports', 'ember-moment/helpers/is-same-or-before'], function (exports, _emberMomentHelpersIsSameOrBefore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersIsSameOrBefore['default'];
    }
  });
});
define('minh-ha-foods/helpers/is-same', ['exports', 'ember-moment/helpers/is-same'], function (exports, _emberMomentHelpersIsSame) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersIsSame['default'];
    }
  });
});
define('minh-ha-foods/helpers/lt', ['exports', 'ember', 'ember-truth-helpers/helpers/lt'], function (exports, _ember, _emberTruthHelpersHelpersLt) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLt.ltHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLt.ltHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/lte', ['exports', 'ember', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersHelpersLte) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersLte.lteHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/moment-add', ['exports', 'ember-moment/helpers/moment-add'], function (exports, _emberMomentHelpersMomentAdd) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentAdd['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-calendar', ['exports', 'ember-moment/helpers/moment-calendar'], function (exports, _emberMomentHelpersMomentCalendar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentCalendar['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-diff', ['exports', 'ember-moment/helpers/moment-diff'], function (exports, _emberMomentHelpersMomentDiff) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDiff['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-duration', ['exports', 'ember-moment/helpers/moment-duration'], function (exports, _emberMomentHelpersMomentDuration) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentDuration['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-format', ['exports', 'ember-moment/helpers/moment-format'], function (exports, _emberMomentHelpersMomentFormat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentFormat['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-from-now', ['exports', 'ember-moment/helpers/moment-from-now'], function (exports, _emberMomentHelpersMomentFromNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentFromNow['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-from', ['exports', 'ember-moment/helpers/moment-from'], function (exports, _emberMomentHelpersMomentFrom) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentFrom['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-subtract', ['exports', 'ember-moment/helpers/moment-subtract'], function (exports, _emberMomentHelpersMomentSubtract) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentSubtract['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-to-date', ['exports', 'ember-moment/helpers/moment-to-date'], function (exports, _emberMomentHelpersMomentToDate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentToDate['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-to-now', ['exports', 'ember-moment/helpers/moment-to-now'], function (exports, _emberMomentHelpersMomentToNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentToNow['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-to', ['exports', 'ember-moment/helpers/moment-to'], function (exports, _emberMomentHelpersMomentTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMomentTo['default'];
    }
  });
});
define('minh-ha-foods/helpers/moment-unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('minh-ha-foods/helpers/moment', ['exports', 'ember-moment/helpers/moment'], function (exports, _emberMomentHelpersMoment) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersMoment['default'];
    }
  });
});
define('minh-ha-foods/helpers/not-eq', ['exports', 'ember', 'ember-truth-helpers/helpers/not-equal'], function (exports, _ember, _emberTruthHelpersHelpersNotEqual) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNotEqual.notEqualHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/not', ['exports', 'ember', 'ember-truth-helpers/helpers/not'], function (exports, _ember, _emberTruthHelpersHelpersNot) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersNot.notHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersNot.notHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/now', ['exports', 'ember-moment/helpers/now'], function (exports, _emberMomentHelpersNow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersNow['default'];
    }
  });
});
define('minh-ha-foods/helpers/or', ['exports', 'ember', 'ember-truth-helpers/helpers/or'], function (exports, _ember, _emberTruthHelpersHelpersOr) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersOr.orHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersOr.orHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/helpers/perform', ['exports', 'ember', 'ember-concurrency/-helpers'], function (exports, _ember, _emberConcurrencyHelpers) {
  exports.performHelper = performHelper;

  function performHelper(args, hash) {
    return (0, _emberConcurrencyHelpers.taskHelperClosure)('perform', 'perform', args, hash);
  }

  exports['default'] = _ember['default'].Helper.helper(performHelper);
});
define('minh-ha-foods/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('minh-ha-foods/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('minh-ha-foods/helpers/task', ['exports', 'ember'], function (exports, _ember) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref);

    var task = _ref2[0];

    var args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports['default'] = _ember['default'].Helper.helper(taskHelper);
});
define('minh-ha-foods/helpers/unix', ['exports', 'ember-moment/helpers/unix'], function (exports, _emberMomentHelpersUnix) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix['default'];
    }
  });
  Object.defineProperty(exports, 'unix', {
    enumerable: true,
    get: function get() {
      return _emberMomentHelpersUnix.unix;
    }
  });
});
define('minh-ha-foods/helpers/xor', ['exports', 'ember', 'ember-truth-helpers/helpers/xor'], function (exports, _ember, _emberTruthHelpersHelpersXor) {

  var forExport = null;

  if (_ember['default'].Helper) {
    forExport = _ember['default'].Helper.helper(_emberTruthHelpersHelpersXor.xorHelper);
  } else if (_ember['default'].HTMLBars.makeBoundHelper) {
    forExport = _ember['default'].HTMLBars.makeBoundHelper(_emberTruthHelpersHelpersXor.xorHelper);
  }

  exports['default'] = forExport;
});
define('minh-ha-foods/history/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    aboutSection: _emberData['default'].belongsTo('about-section')
  });
});
define('minh-ha-foods/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    toggleLang: _ember['default'].inject.service(),

    model: function model() {
      return _ember['default'].RSVP.hash({
        aboutSection: this.store.findAll('about-section').then(function (about) {
          return about.get('firstObject');
        }),

        history: this.store.findAll('history').then(function (history) {
          return history.get('firstObject');
        }),

        whyU: this.store.findAll('why-u').then(function (why) {
          return why.get('firstObject');
        }),

        awards: this.store.findAll('award'),

        productSection: this.store.findAll('product-section').then(function (productSection) {
          return productSection.get('firstObject');
        }),

        productCategories: this.store.findAll('product-category'),

        products: this.store.findAll('product'),

        chefSection: this.store.findAll('chef-section').then(function (chefSection) {
          return chefSection.get('firstObject');
        }),

        chefCategories: this.store.findAll('chef-category'),

        // dishes: this.store.findAll('dish'),

        newsSection: this.store.findAll('news-section').then(function (section) {
          return section.get('firstObject');
        }),
        newsPosts: this.store.findAll('news-post'),
        contact: this.store.findRecord('contact', 1)
        // })
        // .catch((error) => {
        //   console.log(error);
      });
    },

    setupController: function setupController(controller, models) {
      // controller.set('aboutSection', models.aboutSection);
      // controller.set('history', models.history);
      // controller.set('whyU', models.whyU);
      // controller.set('awards', models.awards)
      // controller.set('productSection', models.productSection);
      // or, more concisely:
      controller.setProperties(models);
    },

    actions: {
      toggleViet: function toggleViet() {
        this.get('toggleLang').toggleViet();
        console.log("TOGGLEING");
      },

      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut()
        // .then(() => this.get('store').unloadAll())
        .then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      }
    }

  });
});
define("minh-ha-foods/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3lbPFeON", "block": "{\"statements\":[[\"append\",[\"helper\",[\"navigation-bar\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"banner-image\"],null,[[\"bannerType\",\"toggleViet\"],[\"main\",\"toggleViet\"]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"home-page/about-section\"],null,[[\"aboutSection\",\"history\",\"whyU\",\"awards\"],[[\"get\",[\"aboutSection\"]],[\"get\",[\"history\"]],[\"get\",[\"whyU\"]],[\"get\",[\"awards\"]]]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"home-page/product-section\"],null,[[\"productSection\",\"productCategories\",\"products\"],[[\"get\",[\"productSection\"]],[\"get\",[\"productCategories\"]],[\"get\",[\"products\"]]]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"home-page/chef-section\"],null,[[\"chefSection\",\"chefCategories\",\"dishes\"],[[\"get\",[\"chefSection\"]],[\"get\",[\"chefCategories\"]],[\"get\",[\"dishes\"]]]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"home-page/news-section\"],null,[[\"newsSection\",\"newsPosts\"],[[\"get\",[\"newsSection\"]],[\"get\",[\"newsPosts\"]]]]],false],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"home-page/contact-page\"],null,[[\"contact\",\"history\",\"whyU\",\"chefCategories\",\"productCategories\",\"newsPosts\"],[[\"get\",[\"contact\"]],[\"get\",[\"history\"]],[\"get\",[\"whyU\"]],[\"get\",[\"chefCategories\"]],[\"get\",[\"productCategories\"]],[\"get\",[\"newsPosts\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/index/template.hbs" } });
});
define("minh-ha-foods/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('minh-ha-foods/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('minh-ha-foods/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'minh-ha-foods/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _minhHaFoodsConfigEnvironment) {
  var _config$APP = _minhHaFoodsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('minh-ha-foods/initializers/component-router-injector', ['exports'], function (exports) {
  exports.initialize = initialize;
  // app/initializers/component-router-injector.js

  function initialize(application) {
    // Injects all Ember components with a router object:
    application.inject('component', 'router', 'router:main');
  }

  exports['default'] = {
    name: 'component-router-injector',
    initialize: initialize
  };
});
define('minh-ha-foods/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('minh-ha-foods/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('minh-ha-foods/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports, _emberConcurrency) {
  exports['default'] = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
define('minh-ha-foods/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('minh-ha-foods/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardInitializersEmberKeyboardFirstResponderInputs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardInitializersEmberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('minh-ha-foods/initializers/ember-simple-auth', ['exports', 'minh-ha-foods/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service'], function (exports, _minhHaFoodsConfigEnvironment, _emberSimpleAuthConfiguration, _emberSimpleAuthInitializersSetupSession, _emberSimpleAuthInitializersSetupSessionService) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(registry) {
      var config = _minhHaFoodsConfigEnvironment['default']['ember-simple-auth'] || {};
      config.baseURL = _minhHaFoodsConfigEnvironment['default'].rootURL || _minhHaFoodsConfigEnvironment['default'].baseURL;
      _emberSimpleAuthConfiguration['default'].load(config);

      (0, _emberSimpleAuthInitializersSetupSession['default'])(registry);
      (0, _emberSimpleAuthInitializersSetupSessionService['default'])(registry);
    }
  };
});
define('minh-ha-foods/initializers/export-application-global', ['exports', 'ember', 'minh-ha-foods/config/environment'], function (exports, _ember, _minhHaFoodsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_minhHaFoodsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _minhHaFoodsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_minhHaFoodsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('minh-ha-foods/initializers/flash-messages', ['exports', 'ember', 'minh-ha-foods/config/environment'], function (exports, _ember, _minhHaFoodsConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _minhHaFoodsConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('minh-ha-foods/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('minh-ha-foods/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('minh-ha-foods/initializers/md-settings', ['exports', 'minh-ha-foods/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _minhHaFoodsConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize() {
    var materializeDefaults = _minhHaFoodsConfigEnvironment['default'].materializeDefaults;

    var application = arguments[1] || arguments[0];

    if (window && window.validate_field) {
      window.validate_field = function () {};
    }

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});
define('minh-ha-foods/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('minh-ha-foods/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('minh-ha-foods/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('minh-ha-foods/initializers/truth-helpers', ['exports', 'ember', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _ember, _emberTruthHelpersUtilsRegisterHelper, _emberTruthHelpersHelpersAnd, _emberTruthHelpersHelpersOr, _emberTruthHelpersHelpersEqual, _emberTruthHelpersHelpersNot, _emberTruthHelpersHelpersIsArray, _emberTruthHelpersHelpersNotEqual, _emberTruthHelpersHelpersGt, _emberTruthHelpersHelpersGte, _emberTruthHelpersHelpersLt, _emberTruthHelpersHelpersLte) {
  exports.initialize = initialize;

  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (_ember['default'].Helper) {
      return;
    }

    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('and', _emberTruthHelpersHelpersAnd.andHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('or', _emberTruthHelpersHelpersOr.orHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('eq', _emberTruthHelpersHelpersEqual.equalHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not', _emberTruthHelpersHelpersNot.notHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('is-array', _emberTruthHelpersHelpersIsArray.isArrayHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('not-eq', _emberTruthHelpersHelpersNotEqual.notEqualHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gt', _emberTruthHelpersHelpersGt.gtHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('gte', _emberTruthHelpersHelpersGte.gteHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lt', _emberTruthHelpersHelpersLt.ltHelper);
    (0, _emberTruthHelpersUtilsRegisterHelper.registerHelper)('lte', _emberTruthHelpersHelpersLte.lteHelper);
  }

  exports['default'] = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('minh-ha-foods/initializers/viewport-config', ['exports', 'ember', 'minh-ha-foods/config/environment', 'ember-in-viewport/utils/can-use-dom'], function (exports, _ember, _minhHaFoodsConfigEnvironment, _emberInViewportUtilsCanUseDom) {
  exports.initialize = initialize;

  var defaultConfig = {
    viewportSpy: false,
    viewportScrollSensitivity: 1,
    viewportRefreshRate: 100,
    viewportListeners: [{ context: window, event: 'scroll.scrollable' }, { context: window, event: 'resize.resizable' }],
    viewportTolerance: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  };

  if (_emberInViewportUtilsCanUseDom['default']) {
    defaultConfig.viewportListeners.push({
      context: document,
      event: 'touchmove.scrollable'
    });
  }

  var merge = _ember['default'].merge;

  function initialize() {
    var application = arguments[1] || arguments[0];
    var _config$viewportConfig = _minhHaFoodsConfigEnvironment['default'].viewportConfig;
    var viewportConfig = _config$viewportConfig === undefined ? {} : _config$viewportConfig;

    var mergedConfig = merge(defaultConfig, viewportConfig);

    application.register('config:in-viewport', mergedConfig, { instantiate: false });
  }

  exports['default'] = {
    name: 'viewport-config',
    initialize: initialize
  };
});
define("minh-ha-foods/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _emberDataInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInstanceInitializersInitializeStoreService["default"]
  };
});
define('minh-ha-foods/instance-initializers/ember-simple-auth', ['exports', 'ember-simple-auth/instance-initializers/setup-session-restoration'], function (exports, _emberSimpleAuthInstanceInitializersSetupSessionRestoration) {
  exports['default'] = {
    name: 'ember-simple-auth',

    initialize: function initialize(instance) {
      (0, _emberSimpleAuthInstanceInitializersSetupSessionRestoration['default'])(instance);
    }
  };
});
define('minh-ha-foods/language-toggle/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    viet: null,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('viet', false);
    },
    toggleLang: function toggleLang() {
      this.set('viet', true);
      console.log('language toggled');
    }
  });
});
define('minh-ha-foods/news-post/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    newsDate: _emberData['default'].attr('string'),
    newsSection: _emberData['default'].belongsTo('news-section')
  });
});
define('minh-ha-foods/news-section/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    newsPosts: _emberData['default'].hasMany('news-post')
  });
});
define('minh-ha-foods/product-category/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    catType: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    productSection: _emberData['default'].belongsTo('product-section'),
    products: _emberData['default'].hasMany('product')
  });
});
define('minh-ha-foods/product-category/serializer', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      products: { embedded: 'always' }
    }
  });
});
define('minh-ha-foods/product-section/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    descriptionVn: _emberData['default'].attr('string'),
    categories: _emberData['default'].hasMany('category')
  });
});
define('minh-ha-foods/product/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    titleVn: _emberData['default'].attr('string'),
    volume: _emberData['default'].attr('string'),
    metric: _emberData['default'].attr('string'),
    imageUrl: _emberData['default'].attr('string'),
    details: _emberData['default'].attr('string'),
    detailsVn: _emberData['default'].attr('string'),
    // productCategoryId: DS.attr('string'),
    productCategory: _emberData['default'].belongsTo('productCategory')
  });
});
define('minh-ha-foods/product/serializer', ['exports', 'ember-data', 'active-model-adapter'], function (exports, _emberData, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      productCategory: { deserialize: 'records' }
    }
  });
});
define('minh-ha-foods/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('minh-ha-foods/router', ['exports', 'ember', 'minh-ha-foods/config/environment'], function (exports, _ember, _minhHaFoodsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _minhHaFoodsConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-in');
    this.route('sign-up');
    this.route('users');
    this.route('change-password');

    this.route('admin-route', function () {
      this.route('about-sections', function () {
        this.route('history');
        this.route('why-us');
        this.route('awards');
      });
      this.route('product-sections', function () {
        this.route('categories', function () {});
        this.route('products');
        // this.route('category', { path: '/category/:product-category_id' }, function() {
        //   this.route('products');
        // });
      });
      this.route('chef-section', function () {
        this.route('categories');
        this.route('dishes');
      });
      this.route('news-section', function () {
        this.route('post');
      });
      this.route('contact');
    });
    this.route('chef-dishes', { path: '/chef-dishes/:chef-category_id' });
  });

  exports['default'] = Router;
});
define('minh-ha-foods/routes/application', ['exports', 'ember'], function (exports, _ember) {
  var Route = _ember['default'].Route;

  // Ensure the application route exists for ember-simple-auth's `setup-session-restoration` initializer
  exports['default'] = Route.extend();
});
define('minh-ha-foods/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('minh-ha-foods/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _emberCookiesServicesCookies) {
  exports['default'] = _emberCookiesServicesCookies['default'];
});
define('minh-ha-foods/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('minh-ha-foods/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _emberKeyboardServicesKeyboard) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardServicesKeyboard['default'];
    }
  });
});
define('minh-ha-foods/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _emberCliMaterializeServicesMdSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeServicesMdSettings['default'];
    }
  });
});
define('minh-ha-foods/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define('minh-ha-foods/services/moment', ['exports', 'ember', 'ember-moment/services/moment', 'minh-ha-foods/config/environment'], function (exports, _ember, _emberMomentServicesMoment, _minhHaFoodsConfigEnvironment) {
  var get = _ember['default'].get;
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: get(_minhHaFoodsConfigEnvironment['default'], 'moment.outputFormat')
  });
});
define('minh-ha-foods/services/session', ['exports', 'ember-simple-auth/services/session'], function (exports, _emberSimpleAuthServicesSession) {
  exports['default'] = _emberSimpleAuthServicesSession['default'];
});
define('minh-ha-foods/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _emberTextMeasurerServicesTextMeasurer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberTextMeasurerServicesTextMeasurer['default'];
    }
  });
});
define('minh-ha-foods/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _emberSimpleAuthSessionStoresAdaptive) {
  exports['default'] = _emberSimpleAuthSessionStoresAdaptive['default'].extend();
});
define('minh-ha-foods/sign-in/route', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('admin-route');
        }).then(function () {
          return console.log('signin in');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define("minh-ha-foods/sign-in/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "x6t0t6aO", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col s12 m8 offset-m2\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card blue-grey darken-1 sign-in-card\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-content white-text\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"card-title\"],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"all-forms/sign-in-form\"],null,[[\"credentials\"],[[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"card-action\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"left-align\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signIn\",[\"get\",[\"model\"]]]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"right-align\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/sign-in/template.hbs" } });
});
define('minh-ha-foods/sign-up/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define("minh-ha-foods/sign-up/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CgpYTQGM", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"all-forms/sign-up-form\"],null,[[\"submit\"],[\"signUp\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/sign-up/template.hbs" } });
});
define("minh-ha-foods/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "qORbw6Qq", "block": "{\"statements\":[[\"append\",[\"helper\",[\"radio-button\"],null,[[\"radioClass\",\"radioId\",\"changed\",\"disabled\",\"groupValue\",\"name\",\"required\",\"value\"],[[\"get\",[\"radioClass\"]],[\"get\",[\"radioId\"]],\"innerRadioChanged\",[\"get\",[\"disabled\"]],[\"get\",[\"groupValue\"]],[\"get\",[\"name\"]],[\"get\",[\"required\"]],[\"get\",[\"value\"]]]]],false],[\"text\",\"\\n\\n\"],[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/templates/components/labeled-radio-button.hbs" } });
});
define("minh-ha-foods/templates/components/lazy-background-image", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "3zHuu1mo", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,5,2],[\"text\",\"\\n\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"style\",\"display: none\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"lazyUrl\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-placeholder\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"id\",\"loader-1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"x\",\"0px\"],[\"static-attr\",\"y\",\"0px\"],[\"static-attr\",\"width\",\"40px\"],[\"static-attr\",\"height\",\"40px\"],[\"static-attr\",\"viewBox\",\"0 0 40 40\"],[\"static-attr\",\"enable-background\",\"new 0 0 40 40\"],[\"static-attr\",\"xml:space\",\"preserve\",\"http://www.w3.org/XML/1998/namespace\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"opacity\",\"0.2\"],[\"static-attr\",\"fill\",\"#000\"],[\"static-attr\",\"d\",\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\\n        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\\n        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"fill\",\"#000\"],[\"static-attr\",\"d\",\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\\n        C22.32,8.481,24.301,9.057,26.013,10.047z\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"animateTransform\",[]],[\"static-attr\",\"attributeType\",\"xml\"],[\"static-attr\",\"attributeName\",\"transform\"],[\"static-attr\",\"type\",\"rotate\"],[\"static-attr\",\"from\",\"0 20 20\"],[\"static-attr\",\"to\",\"360 20 20\"],[\"static-attr\",\"dur\",\"0.5s\"],[\"static-attr\",\"repeatCount\",\"indefinite\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-error-message\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"defaultErrorText\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"errorThrown\"]]],null,1,0]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-placeholder\"],[\"flush-element\"],[\"yield\",\"default\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-error-message\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"defaultErrorText\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"errorThrown\"]]],null,4,3]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/templates/components/lazy-background-image.hbs" } });
});
define("minh-ha-foods/templates/components/lazy-image", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "U9z/YGd4", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,7,4],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"useDimensionsAttrs\"]]],null,1,0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"unbound\"],[[\"get\",[\"class\"]]],null]]]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"lazyUrl\"]],null],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"helper\",[\"unbound\"],[[\"get\",[\"alt\"]]],null]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[[\"helper\",[\"unbound\"],[[\"get\",[\"class\"]]],null]]]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"lazyUrl\"]],null],[\"dynamic-attr\",\"alt\",[\"concat\",[[\"helper\",[\"unbound\"],[[\"get\",[\"alt\"]]],null]]]],[\"dynamic-attr\",\"height\",[\"unknown\",[\"height\"]],null],[\"dynamic-attr\",\"width\",[\"unknown\",[\"width\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-placeholder\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"svg\",[]],[\"static-attr\",\"version\",\"1.1\"],[\"static-attr\",\"id\",\"loader-1\"],[\"static-attr\",\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"xmlns:xlink\",\"http://www.w3.org/1999/xlink\",\"http://www.w3.org/2000/xmlns/\"],[\"static-attr\",\"x\",\"0px\"],[\"static-attr\",\"y\",\"0px\"],[\"static-attr\",\"width\",\"40px\"],[\"static-attr\",\"height\",\"40px\"],[\"static-attr\",\"viewBox\",\"0 0 40 40\"],[\"static-attr\",\"enable-background\",\"new 0 0 40 40\"],[\"static-attr\",\"xml:space\",\"preserve\",\"http://www.w3.org/XML/1998/namespace\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"opacity\",\"0.2\"],[\"static-attr\",\"fill\",\"#000\"],[\"static-attr\",\"d\",\"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\\n        s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\\n        c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"path\",[]],[\"static-attr\",\"fill\",\"#000\"],[\"static-attr\",\"d\",\"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\\n        C22.32,8.481,24.301,9.057,26.013,10.047z\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"animateTransform\",[]],[\"static-attr\",\"attributeType\",\"xml\"],[\"static-attr\",\"attributeName\",\"transform\"],[\"static-attr\",\"type\",\"rotate\"],[\"static-attr\",\"from\",\"0 20 20\"],[\"static-attr\",\"to\",\"360 20 20\"],[\"static-attr\",\"dur\",\"0.5s\"],[\"static-attr\",\"repeatCount\",\"indefinite\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-error-message\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"defaultErrorText\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"errorThrown\"]]],null,3,2]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-placeholder\"],[\"flush-element\"],[\"yield\",\"default\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"lazy-image-error-message\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"defaultErrorText\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"errorThrown\"]]],null,6,5]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/templates/components/lazy-image.hbs" } });
});
define('minh-ha-foods/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("minh-ha-foods/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "IS0E3uBF", "block": "{\"statements\":[[\"block\",[\"if\"],[[\"has-block\",\"default\"]],null,1,0]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"radio-button-input\"],null,[[\"class\",\"id\",\"disabled\",\"name\",\"required\",\"groupValue\",\"value\",\"changed\"],[[\"get\",[\"radioClass\"]],[\"get\",[\"radioId\"]],[\"get\",[\"disabled\"]],[\"get\",[\"name\"]],[\"get\",[\"required\"]],[\"get\",[\"groupValue\"]],[\"get\",[\"value\"]],\"changed\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"label\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"ember-radio-button \",[\"helper\",[\"if\"],[[\"get\",[\"checked\"]],\"checked\"],null],\" \",[\"unknown\",[\"joinedClassNames\"]]]]],[\"dynamic-attr\",\"for\",[\"unknown\",[\"radioId\"]],null],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"radio-button-input\"],null,[[\"class\",\"id\",\"disabled\",\"name\",\"required\",\"groupValue\",\"value\",\"changed\"],[[\"get\",[\"radioClass\"]],[\"get\",[\"radioId\"]],[\"get\",[\"disabled\"]],[\"get\",[\"name\"]],[\"get\",[\"required\"]],[\"get\",[\"groupValue\"]],[\"get\",[\"value\"]],\"changed\"]]],false],[\"text\",\"\\n\\n    \"],[\"yield\",\"default\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/templates/components/radio-button.hbs" } });
});
define('minh-ha-foods/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define('minh-ha-foods/toggle-lang/service', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    showViet: false,

    init: function init() {
      this._super.apply(this, arguments);
    },

    toggleViet: function toggleViet() {
      this.toggleProperty('showViet');
      console.log(this.get('showViet'));
    }

  });
});
define('minh-ha-foods/user/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr()
  });
});
define('minh-ha-foods/users/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    }
  });
});
define("minh-ha-foods/users/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ed4CmhZ/", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Users\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "minh-ha-foods/users/template.hbs" } });
});
define('minh-ha-foods/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _emberKeyboardUtilsListenerName) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberKeyboardUtilsListenerName['default'];
    }
  });
});
define('minh-ha-foods/why-u/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    description: _emberData['default'].attr('string'),
    aboutSection: _emberData['default'].belongsTo('about-section')
  });
});


define('minh-ha-foods/config/environment', [], function() {
  var prefix = 'minh-ha-foods';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("minh-ha-foods/app")["default"].create({"name":"minh-ha-foods","version":"0.0.1+34612e82"});
}
//# sourceMappingURL=minh-ha-foods.map
