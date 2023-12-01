function tela(simb){
   var numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + simb;
}
function limpa(){
   document.getElementById('resultado').innerHTML = "";
}
function apaga(){
   var apagar = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1)
}
function calculo(){
   var resultado = document.getElementById('resultado').innerHTML;
   if(resultado){
      document.getElementById('resultado').innerHTML = eval(resultado);
   }
   else{
      document.getElementById('resultado').innerHTML = "Sem calculo";
      
   }
}