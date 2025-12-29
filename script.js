const disp = document.getElementById("display");

function appendTOdisplay(input){
    disp.value += input ;
}

function Calculate(){

    try{
        disp.value = eval(disp.value);
    }
    catch(error){
        disp.value = "ERROR"
    }
}

function ClearDisplay(){
    disp.value = "";
}