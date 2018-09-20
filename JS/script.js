function doChangeSection(id){
    let sections = document.getElementsByClassName("selected");
    let sectionsBtn = document.getElementsByClassName("sections--button");
    for (let i = 0; i < sections.length; i++) {
        if(sections[i].id == id){
            sections[i].style.display = "block";
            sectionsBtn[i].style.backgroundColor = "#003477";
        }
        else{
            sections[i].style.display = "none";
            sectionsBtn[i].style.backgroundColor = "rgb(0, 120, 215)";
        }
    }
}



function doAddSubtract(sign){
    let value = parseInt(document.getElementById("counter").innerHTML);

    if(sign == "add"){
        value = value + 1;
    }
    else if(sign == "sub" && value > 0){
        value = value - 1;
    } 


    document.getElementById("counter").innerHTML = value;       
}
function doCalculate(){
    let list = document.getElementById("operators");
    let listSelectedItem = list.options[list.selectedIndex].value;
    let x = document.getElementById("input_x").value;
    let y = document.getElementById("input_y").value;
    if(x != null && y!= null && !isNaN(x) && !isNaN(y)){
       let result = 0;
       listSelectedItem = parseInt(listSelectedItem);
       x = parseFloat(x);
       y = parseFloat(y);
       switch(listSelectedItem){
           case 1:
           result = x + y;
           break;
           case 2:
           result = x - y;
           break;
           case 3:
           result = x * y;
           break;
           case 4:
           result = x / y;
           break
       }
       document.getElementById("result").innerText = result;
    }
    else{
        alert("Inputs X and Y must be filled, and have to be numbers.");
    }
}
/*function doAlert(){
    document.getElementById("noBlur").id = "blur";
    setTimeout(function() {
        if(confirm("Nice Blur")) {
            document.getElementById("blur").id = "noBlur";
        }
        else document.getElementById("blur").id = "noBlur";
    },10)
    
}*/

var modal = document.getElementById('simpleModal');

var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];



modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function outsideClick(e){
  if(e.target == document.getElementById('simpleModal')){
    modal.style.display = 'none';
  }
}