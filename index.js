// Function Declaration
function saturdayFun(param="roller-skate"){
  return `This Saturday, I want to ${param}!`
}

// Function Expression
const mondayWork = function(param="go to the office") {
  return `This Monday, I will ${param}.`;
}

// Immediately Invoked Function Expression
function wrapAdjective(string="*"){
  return function(param="special"){
    return `You are ${string}${param}${string}!`
  }
}

const Calculator = {
  add: function(a,b){
    return a + b;
  },
  subtract: function(a,b){
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b){
    return a / b;
  }
}

function actionApplyer(int,arr){
  let put = int
  for(var i=0; i<arr.length; i++) {
    put = arr[i](put)
  }
  return put;
}
