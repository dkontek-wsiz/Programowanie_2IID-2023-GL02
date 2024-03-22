function zmienTekst() {
   alert("Witaj na stronie");

   game()
}

for(var i = 0; i <= 100; i = i +2) {
    console.log(i);
}

//dodawanie()

function dodawanie() {
    var a = prompt("");
    var b = prompt("");

// console.log(a + b);
    console.log(+a + +b);
    console.log(parseInt(a) + parseInt(b));
}

setInterval(time, 1000);

function time() {
  var date = new Date()

  var hour = date.getHours();
  var minute = date.getMinutes();
  var s = date.getSeconds();

  document.getElementById("tekst").innerHTML = 
  `${hour}:${minute}:${s}`
  //hour + ":" + minute + ":" + s;
}

function game() {
var number = Math.floor(Math.random() * 100);
var shot = -1;
var count = 0;
while(number != shot) {
    shot = prompt("");
    count++;
    if(number > shot) {
        alert("za mała");
    }
    else if(number < shot){
        alert("za duza");
    }
    else {
        alert(`Zgadłes ${count}`)
    }
}
}