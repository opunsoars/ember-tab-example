import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    return this.controllerFor('application').tabs[params.id - 1];
  },

  renderTemplate: function(controller, tab) {
    var templateName = 'tabs/%@'.fmt(tab.id);
    this.render(templateName);
  }

});
