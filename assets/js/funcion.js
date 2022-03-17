
  function calcular() {
    var a = document.forms["miform"]["checkbox1"].checked;
    var b = document.forms["miform"]["checkbox2"].checked;
if(a==true && b==true){
    document.getElementById("el_resultado").innerHTML = ((22000)*1.19);
    return false;
}
else if(b==true){
    document.getElementById("el_resultado").innerHTML = ((15000)*1.19);
    return false;
}
else if(a==true){
    document.getElementById("el_resultado").innerHTML = ((7000)*1.19);
    return false;
}
else{
    document.getElementById("el_resultado").innerHTML = (0);
    return false;
}
} 
