//primero igualo el word que es mi funcion a prompt para que salga la alerta
word=prompt('Ingrese una frase');

//
function cipher(word) {

 //para el valor del string que le pongan.
 var str='';

 //para que recorra a cada letra de la frase
 for (var i=0; i<word.length; i++){
   str = str + word.charCodeAt(i);

   var fraction = ((str-65+106)%26+65);

   console.log(fraction);

 String.fromCharCodeAt(fraction);
 }

 return String.fromCharCodeAt(fraction);
}
 cipher('H');

 function decipher(word) {
   var str='';

   for(var i=0; i<word.length;i++){
     str = str + word.charCodeAt(i);

     var fraction = ((str-65)%26);

     console.log(fraction);
   }

   return String.fromCharCodeAt(fraction);
 }

 decipher('A')
