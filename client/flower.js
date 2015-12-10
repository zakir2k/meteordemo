Template.flowers.helpers({
  flowers: function(){
    return Flowers.find({});
  }
});

Template.flowers.events({
  'click .buy': function(evt){
  	console.log('clicked');
  	var button = $(evt.target)
  	button.addClass('bought');
  	button.removeClass('buy');
  	button.html('Bought');
  }
});
