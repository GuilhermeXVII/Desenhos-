const quadro = document.querySelector("canvas");
const caneta = quadro.getContext("2d");

function corDeFundo(){
    caneta.fillStyle = "#2F4F4F";
    caneta.fillRect(0, 0, 600, 700);

}

function troncoDoCorpo(){
    caneta.fillStyle = "blue";
    caneta.fillRect(100, 500, 350, 500);
}

function pescoco(){
    caneta.fillStyle = "#A0522D";
    caneta.fillRect(242.5, 400, 90, 100);
}

function cabeca(){
    caneta.fillStyle = "#A0522D";
    caneta.beginPath();
    caneta.arc(285, 350, 120, 0, 2 * 3.14);
    caneta.fill();

}

function mangaEsquerdo(){
    caneta.fillStyle = "blue";
    caneta.beginPath()
    caneta.arc(130, 616, 120, 3, 2 * 3.14);
    caneta.fill();

}

function bracoEsquerdo(){
    caneta.fillStyle = "#A0522D";
    caneta.fillRect(10, 620, 100, 200);

}

function mangaDireita(){
    caneta.fillStyle = "blue"
    caneta.beginPath();
    caneta.arc(430, 619, 121, 7, 2 * 3.14);
    caneta.fill();
}

function bracoDireito(){
    caneta.fillStyle = "#A0522D";
    caneta.fillRect(450, 620, 100, 200);
}

function cabelo() {
    caneta.fillStyle = "black";

    caneta.beginPath();
    caneta.arc(286, 290, 111, 3.14, 0);
    caneta.fill();

    caneta.fillStyle = "black";
    caneta.fillRect(175, 290, 222, 15);

}


function olhoEsquerdo(){
    caneta.fillStyle = "white";
    caneta.beginPath();
    caneta.arc(250, 350, 40, 0, 2 * 3.14);
    caneta.fill();

    caneta.fillStyle = "black";
    caneta.beginPath();
    caneta.arc(250, 350, 20, 0, 2 * 3.14);
    caneta.fill();

}

function olhoDireito(){
    caneta.fillStyle = "white";
    caneta.beginPath();
    caneta.arc(330, 350, 40, 0, 2 * 3.14);
    caneta.fill();

    caneta.fillStyle = "black";
    caneta.beginPath();
    caneta.arc(330, 350, 20, 0, 2 * 3.14);
    caneta.fill();

}

function boca() {
  caneta.strokeStyle = "black";  
  caneta.lineWidth = 4;  

  caneta.beginPath();
  caneta.arc(285, 400, 50, 0, 3.14, false);

  caneta.stroke();

}


function exibirPersonagem(){
    corDeFundo();
    troncoDoCorpo();
    pescoco();
    cabeca();
    mangaEsquerdo();
    bracoEsquerdo();
    mangaDireita();
    bracoDireito();
    cabelo();
    olhoEsquerdo();
    olhoDireito();
    boca();

}

exibirPersonagem();