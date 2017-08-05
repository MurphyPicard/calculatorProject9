// handlers we will use for the calculations
var firstNumber = 0;
var secondNum = 0;

function getNum(){
  firstNumber = $('#firstNum').val();
  secondNumber = $('#secondNum').val();
}

var handlers = {

  add: function(){
    getNum();
    var sum = parseInt(firstNumber) + parseInt(secondNumber);
    $('#answer').text(sum);
  },

  subtract: function(){
    getNum();
    var diff = parseInt(firstNumber) - parseInt(secondNumber);
    $('#answer').text(diff);
  },

  multiply: function(){
    getNum();
    var product = parseInt(firstNumber) * parseInt(secondNumber);
    $('#answer').text(product);
  },

  divide: function(){
    getNum();
    var quotient = parseInt(firstNumber) / parseInt(secondNumber);
    $('#answer').text(quotient);
  }
}

// style methods
