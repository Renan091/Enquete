let encremento = 0;
let mover = 540;
let largura = 0;
let cont = 0;
let largura2 = 0    
let getval1 = 5;
let getval2 = 5;

function resultSim(){
    encremento++;
    largura = largura + 20;
    document.getElementById("infSim").innerHTML = encremento;
    document.querySelector("#infSim").style.width = largura+"px";
    if (encremento > getval2){
        getval1 = encremento;
        mover = mover - 8;
        document.querySelector(".result").style.left = mover+"px";
        document.querySelector("#infSim").style.left = mover+"px";
        document.querySelector("#infNao").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
}
}

function resultNao(){
    cont++;
    document.getElementById("infNao").innerHTML = cont;
    largura2 = largura2 + 20;
    document.querySelector("#infNao").style.width = largura2+"px";
    if (cont > getval1){
        getval2 = cont;
        mover = mover - 8;
        document.querySelector(".result").style.left = mover+"px";
        document.querySelector("#infSim").style.left = mover+"px";
        document.querySelector("#infNao").style.left = mover+"px";
        document.querySelector("#nao").style.left = mover+"px";
        document.querySelector("#sim").style.left = mover+"px";
    }
    
}

