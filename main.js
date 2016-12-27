function diez(){
    var a= parseInt(document.getElementById("a").value);
    var b= parseInt(document.getElementById("b").value);
    var suma = a+b; document.getElementById("suma").innerHTML=suma;  
    
    if (a==10||b==10||suma==10)
        document.getElementById("resultado").innerHTML="1";    
    else
        document.getElementById("resultado").innerHTML="0" ;
}
