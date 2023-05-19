function display(value){
  document.getElementById("result").value +=value;
}
function allclear(){

  document.getElementById("result").value ="";
}
let text11='';
function te(val){
 text11 =document.getElementById("result").value+""+val;
  document.getElementById("result").value = text11;
  allclear();
}


function evaluat(){

       var text=document.getElementById("result").value
     var res = eval(text11+""+text);
     if(isFinite(res))
     {
       document.getElementById("result").value = res;
       return;
     }
     // else{

  document.getElementById("result").value ="Error!!";
  document.getElementById("result").style.backgroundColor ="red";

// }
}
