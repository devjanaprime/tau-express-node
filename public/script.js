console.log('sourced!');

$(document).ready(function() {

  var getPets = function() {
    console.log('called getPets');
    $.ajax({
      type: 'GET', //POST
      url: '/pets',
      // data: petFromDom,
      success: function(response) {
        console.log('response from server:', response);
        // appending to the dom
      }
    }); //end ajax
  };

  $("#meow").on('click', getPets);

});
