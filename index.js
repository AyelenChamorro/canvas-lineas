
var texto= document.getElementById("texto-lineas");
var button= document.getElementById("boton");
button.addEventListener ("click", dibujoPorClick);

var d = document.getElementById("dibujo");
var ancho = d.width;
var lienzo = d.getContext("2d");







function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    lienzo.lineWidth = (1);
}


function dibujoPorClick () {
    


    var linea = parseInt(texto.value);
    var i = 0;
    var yi, xf;
    var colorr = "rgb(96, 0, 250)";
    var color3 = "red";
    var espacio = ancho / linea;

    for (i; i < linea; i++) {
        yi = espacio * i;
        xf = espacio * (i + 1);
        dibujarLinea(colorr, 0, yi, xf, 500);
        console.log("linea" + i);
    }

    dibujarLinea(colorr, 1, 1, 1, 499);
    dibujarLinea(colorr, 1, 499, 499, 499);

    for (i = 0; i < linea; i++) {
        yi = espacio * i;
        xf = espacio * (i + 1);
        dibujarLinea(colorr, 500, xf, yi, 0);
        console.log("linea" + i);
    }

    dibujarLinea(colorr, 499, 1, 1, 1);
    dibujarLinea(colorr, 499, 1, 499, 499);
    
    for (i = 0; i < linea; i++) {
        yi = espacio * i;
        xf = 490 - yi;
        dibujarLinea(color3, 500, yi, xf, 500);
        console.log(yi, xf);
    }

    dibujarLinea(colorr, 499, 1, 1, 1);
    dibujarLinea(colorr, 499, 1, 499, 499);

    for (i = 0; i < linea; i++) {
        yi = espacio * i;
        xf = 490 - yi;
        dibujarLinea(color3, 0, yi, xf, 0);
        console.log(yi, xf);

       
    }
    dibujarLinea(colorr, 499, 1, 1, 1);
    dibujarLinea(colorr, 499, 1, 499, 499);
    
}
 