
let flag = 0
let divs = document.getElementsByClassName ("subdiv1");

divs[flag].style.display = "block";

function nextmove(){

    divs[flag].style.display = "none";
    flag = flag + 1;
    if (flag == 4){
        flag = 0;
    }
    divs[flag].style.display = "block";
}

function prevmove (){

    divs[flag].style.display = "none";
    if (flag == 0){
        flag = 3
    }
    else{
        flag = flag - 1;
    }
    divs[flag].style.display = "block";
}

