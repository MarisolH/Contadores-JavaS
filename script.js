console.warn("cargando script!");
var contador=0;
var contador2=0;
function incrementa(){
  let x =document.getElementById('cuenta');
  x.innerText=contador;
  contador = contador +1;
  setTimeout(incrementa, 1000);
}
function incrementa2(){

  let xx =document.getElementById('cuenta2');
  xx.innerText=contador2;
  contador2 = contador2 -1;
  setTimeout(incrementa2, 1000);
}
incrementa();
incrementa2();
