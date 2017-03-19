var calculateNum='+';
var calculateNum='-';
var calculateNum='*';
var calculateNum='/';

$(document).ready(function(){
  console.log("Hi");

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

$('#submit').on('click', function(event) {
  event.prevErr();
  serverSide();
});

$('#clear').on('click', function(event) {
  event.prevErr();
  $('#number1').val('');
  $('#number2').val('');
  $('#outputDiv').empty();
});


var proRes = function (response) {
  console.log('in proRes: ' + response);
  $('#outputDiv').text(response);
};


function serverSide () {
  var number1 = $('#number1').val();
  var number2 = $('#number2').val();
  var mathCalculation = calculateNum;

  var inputObject = {
    "input1": number1,
    "input2": number2,
    "oper":mathCalculation
  };

  $.ajax({
    url: "/pathPost",
    type: "POST",
    data: inputObject,
    success: function(newData){
      console.log(newData);

      proRes(newData);
    },
    statusCode: {
      404: function() {
        alert('error connecting to server');
      }
    }
  });
}




// AJAX here
// var num1 = (form input 1)
// GET /add/7/8 (on the server "/add/:num1/:num2")
// OR
// POST /add with a data: {num1: 7, num2: 8} <- Recommended
