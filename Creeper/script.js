const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

function desenharCabeca(){
    pincel.fillStyle = "green";
    pincel.fillRect(0, 0, 900, 600);

}

function olhoEsquerdo(){
    pincel.fillStyle = "black";
    pincel.fillRect(150, 90, 200, 200);

}

function olhoDireito(){
    pincel.fillStyle = "black";
    pincel.fillRect(550, 90, 200, 200);
}

function achoQueEhNariz(){
    pincel.fillStyle = "black";
    pincel.fillRect(350, 290, 200, 200 );    
}

function bigodeEsquerdo(){
    pincel.fillStyle = "black";
    pincel.fillRect(250, 400, 100, 200)
}

function bigodeDireito(){
    pincel.fillStyle = "black";
    pincel.fillRect(550, 400, 100, 200)
}

desenharCabeca();
olhoEsquerdo();
olhoDireito();
achoQueEhNariz();
bigodeEsquerdo();
bigodeDireito();
