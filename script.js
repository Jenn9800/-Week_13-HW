var getInputValue = document.getElementById('inputValue');
var returnResult = document.getElementById('currentResult');
var returnHistory = document.getElementById('resultHistory');

window.onload = function () {
  document.getElementById('number-submit').addEventListener('click', playGame);
 };

  var randomNumber = Math.floor(Math.random() * 100) + 1; 
  var min=  1;     
  var max = 100;   
     
 
function playGame(){
  var createHistoryElement = document.createElement('div');
  createHistoryElement.classList.add('list-group-item');
  
 
   if (getInputValue.value === '') {
    returnResult.innerHTML =
      '<div class="alert alert-warning">Please Enter a number</div>';
  } else if (getInputValue.value > 100) {
    returnResult.innerHTML =
      '<div class="alert alert-warning">Please Enter number between 1 to 100</div>';
  } else if (getInputValue.value > randomNumber && getInputValue.value>min) {
             max =  getInputValue.value; 
    createHistoryElement.innerText =   min + ' ~ '+ max ; 
   returnResult.innerHTML =  '<div class="alert alert-warning">Your guess is too high!</div>';
   
    } else if (getInputValue.value < randomNumber && getInputValue.value<max) {
              min = getInputValue.value;
      createHistoryElement.innerText =   min +' ~ ' + max; 
      returnResult.innerHTML = '<div class="alert alert-warning">Your guess is too low!</div>';
    } else {
   alert("Congrats! You got it!");
    }
  
  
   returnHistory.appendChild(createHistoryElement);

  historyArray.push(getInputValue.value);
  
};

