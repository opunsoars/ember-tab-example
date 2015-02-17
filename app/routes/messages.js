import Ember from 'ember';

export default Ember.Route.extend({

  actions: {

    createMessage: function() {
      var now = new Date().getTime();
      var message = Ember.Object.create({
        id: now,
        title: 'Message ' + now,
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nulla quis tortor faucibus ultricies. Aenean ultrices quam et lacus ultrices, ullamcorper posuere leo maximus. Suspendisse eget mi id lacus scelerisque molestie ac viverra ante. Phasellus a venenatis enim. Duis id volutpat neque, non porta leo. Aliquam est mauris, placerat a semper non, convallis id justo. Nulla vitae vestibulum ligula, at suscipit lorem. Suspendisse potenti. Donec ex libero, venenatis a tristique sed, rhoncus at mi.</p>' +
'<p>Nunc quis dui vel purus convallis scelerisque. Aenean convallis finibus ligula, ut luctus ligula tempor quis. Nam ullamcorper vel massa et pharetra. Praesent tortor ipsum, vehicula non convallis eget, dignissim non quam. Suspendisse potenti. Proin vel suscipit dui. Nulla nibh magna, tristique eu erat eu, accumsan scelerisque orci. Vestibulum imperdiet placerat dolor, ut aliquam mauris placerat et. Vivamus vitae turpis ut velit pharetra vulputate quis in sem. Nulla et turpis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ut tristique nisl. Duis consequat fringilla volutpat.</p>' + 
'<p>Nulla porta magna elementum diam dictum, a elementum tellus elementum. Duis nisi sapien, pretium in bibendum iaculis, condimentum sit amet dolor. Proin eu augue libero. In hac habitasse platea dictumst. Sed in dapibus nulla, ac dictum lacus. In ut turpis id lacus dictum tincidunt at sollicitudin urna. Curabitur consequat rutrum mauris at porttitor. Vivamus a eleifend nibh, nec faucibus turpis. Aenean ornare bibendum enim in placerat. Nulla in venenatis quam. Aenean rhoncus dui enim, vel porta purus varius nec. Fusce gravida facilisis justo a lacinia. Vestibulum non ex eget ex aliquet mollis in nec turpis. Praesent eu aliquam enim. Praesent maximus tempus mauris et congue.</p>'
      });
      this.controllerFor('messages').addObject(message);
      this.transitionTo('messages.tab', message);
    },

    deleteMessage: function(message) {
      var messages = this.controllerFor('messages');
      messages.removeObject(message);
      if (messages.get('length') > 0) {
        this.transitionTo('messages.tab', messages.objectAt(0));
      } else {
        this.transitionTo('messages');
      }
    }


  }
});
