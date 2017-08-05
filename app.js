// handlers we will use for the calculations
var firstNumber = 0;
var secondNum = 0;

function getNum(){
  firstNumber = $('#firstNum').val();
  secondNumber = $('#secondNum').val();
}

// for top section
var handlers = {

  add: function(){
    getNum();
    var sum = parseInt(firstNumber) + parseInt(secondNumber);
    $('#answer').text("Answer: "+ sum);
  },

  subtract: function(){
    getNum();
    var diff = parseInt(firstNumber) - parseInt(secondNumber);
    $('#answer').text("Answer: "+ diff);
  },

  multiply: function(){
    getNum();
    var product = parseInt(firstNumber) * parseInt(secondNumber);
    $('#answer').text("Answer: "+ product);
  },

  divide: function(){
    getNum();
    var quotient = parseInt(firstNumber) / parseInt(secondNumber);
    $('#answer').text("Answer: "+ quotient);
  }
}

var currentNumber = '';
var userArray = [];
$('#zero').click(function(){
  console.log("clicked 0");

  if(currentNumber != ''){
    currentNumber += "0";
    $('.display').text(currentNumber);
  }
  else if(currentNumber == ''){
    $('.display').text('0');
  }



  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#one').click(function(){
  console.log("clicked 1");
  currentNumber += "1";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#two').click(function(){
  console.log("clicked 2");
  currentNumber += "2";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#three').click(function(){
  console.log("clicked 3");
  currentNumber += "3";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#four').click(function(){
  console.log("clicked 4");
  currentNumber += "4";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#five').click(function(){
  console.log("clicked 5");
  currentNumber += "5";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#six').click(function(){
  console.log("clicked 6");
  currentNumber += "6";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#seven').click(function(){
  console.log("clicked 7");
  currentNumber += "7";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#eight').click(function(){
  console.log("clicked 8");
  currentNumber += "8";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
$('#nine').click(function(){
  console.log("clicked 9");
  currentNumber += "9";
  console.log(currentNumber);
  $('.display').text(currentNumber);
});
