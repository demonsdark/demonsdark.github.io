var valueList = document.getElementById('valueList');
var text = '<span> Haz selecconado: </p>';
var lisArray = [];
var count = 0;
var valorFinal = '<span> Haz selecconado: <br> Servicio completo: $22.000 </p>';

var checkboxes = document.querySelectorAll('.checkbox');

for (var checkbox of checkboxes){
  checkbox.addEventListener('click',function(){
    if(this.checked == true){
      count++;
      lisArray.push(this.value);
      valueList.innerHTML = text + lisArray.join(' <br> ');
      if(count == 2){
        valueList.innerHTML = valorFinal;
        lisArray = lisArray.filter(e=> e !== this.value);
      }
    }
    else{
      count--;
      lisArray = lisArray.filter(e=> e !== this.value);
      valueList.innerHTML = text + lisArray.join(' / ');
    }
  });
};







function Numeros(string){//Solo numeros
  var out = '';
  var filtro = '1234567890kK';//Caracteres validos

  //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
  for (var i=0; i<string.length; i++)
     if (filtro.indexOf(string.charAt(i)) != -1) 
           //Se añaden a la salida los caracteres validos
     out += string.charAt(i);

  //Retornar valor filtrado
  return out;
} 





function Text(string){//solo letras
  var out = '';
  //Se añaden las letras validas
  var filtro = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ áéíóú';//Caracteres validos

  for (var i=0; i<string.length; i++)
     if (filtro.indexOf(string.charAt(i)) != -1) 
     out += string.charAt(i);
  return out;
}