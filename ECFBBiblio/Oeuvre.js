var numbers = document.querySelector('#numbers');
var count = document.querySelector('.beancount');

count.textContent = numbers.value;

numbers.oninput = function() {
  count.textContent = numbers.value;
}