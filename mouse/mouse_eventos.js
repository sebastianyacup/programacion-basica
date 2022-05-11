    var cuadrito = document.getElementById("area_de_dibujo");
    var papel = cuadrito.getContext("2d");
    var x;
    var y;
    var estado;
    var colorcito = "red"; 
    cuadrito.addEventListener("mouseup", pulsarmouse);
    cuadrito.addEventListener("mousemove",movermouse);

    
    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo)
    {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth= 0.5
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
    }
    function pulsarmouse(mousevento)
    {  
        estado = 1;
        x = mousevento.layerX;
        y = mousevento.layerY;
        
    }
    function movermouse(mousevento)
    {
       if (estado == 1)
       {
        dibujarLinea(colorcito, x, y, mousevento.layerX, mousevento.layerY, papel);
       }
       else
       {   
           x= mousevento.layerX
           y= mousevento.layerY
       }
    }
