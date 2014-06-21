//var Messages;

//Messages = new Meteor.Collection("messages");

if (Meteor.isClient) 
{
  window.Messages = Messages;
  Template.messages.messages = function() {
    return Messages.find({}, {sort: {time: -1}});
  };
  
  Template.entry.events = {
    'keydown input#messageBox': function(event) {
      var name, new_message;
      name = $("#name");
      new_message = $("#messageBox");
      if (event.which == 13) 
      {
        if (name.value != '' && new_message.value != '')
        {
        Messages.insert({name: name.value(), message: new_message.value(), created: Date.now()});
        new_message.value("");
        new_message.focus();
        return $("#chat").scrollTop(9999999);
        }
        if(name.value == '' && new_message.value != '')
        {
          alert("wpisz imie!");
        }
      }
    }
  };
}
