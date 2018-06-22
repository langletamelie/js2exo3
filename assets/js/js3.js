document.getElementById("lastname").oninput = function() {word()};
function word(){
  //déclaration de la variable
var letter = document.getElementById('lastname').value;
alert(letter);
}
