var calculateNum='+';
var calculateNum='-';
var calculateNum='*';
var calculateNum='/';

$(document).ready(function(){
  console.log("Hi");
  $("#addNumber").on("submit", function(event) {
    event.preventDefault();
    serverSide();

    $('#clear').on('click', function(event) {
      event.preventDefault();
      $('#number1').val('');
      $('#number2').val('');
      $('#outputDiv').empty();
    });
  });

  $("#submitAdd").on("click", function(){
    calculateNum='+';
  });

  $("#submitSubtraction").on("click", function(){
    calculateNum='-';
  });
  $("#submitMultiplication").on("click", function(){
    calculateNum='*';
  });
  $("#submitDivision").on("click", function(){
    calculateNum='/';
  });
});



var proResponse = function (response) {
  console.log('in proResponse: ' + response);
  $('#outputDiv').text(response);
};


function serverSide () {
  var number1 = $('#number1').val();
  var number2 = $('#number2').val();
  var mathCalculation = calculateNum;

  var inputObject = {
    "input1": number1,
    "input2": number2,
    "oper": mathCalculation
  };

  $.ajax({
    url: "/pathPost",
    type: "POST",
    data: inputObject,
    success: function(newData){
      console.log(newData);

      proResponse(newData);
    },
    statusCode: {
      404: function() {
        alert('error connecting to server');
      }
    }
  });
}


// $('#submit').on('click', function(event) {
//   event.preventDefault();
//   serverSide();
// });

// $("form").submit(function(){
//        alert("Recalculate");
//    });

// AJAX here
// var num1 = (form input 1)
// GET /add/7/8 (on the server "/add/:num1/:num2")
// OR
// POST /add with a data: {num1: 7, num2: 8} <- Recommended
