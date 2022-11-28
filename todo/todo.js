function createNewTodo(){
var d = document.createElement('div'); // create div, d
$('.items').appendChild( d ); // add d to place
d.innerHTML = $('.newtodo').value;
$('.newtodo').value = '';
d.onclick = function(){
d.className = 'done'; // change d class
};
}