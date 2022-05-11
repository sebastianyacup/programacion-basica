var vp= document.getElementById("villaplatzi");
var papel= vp.getContext("2d");
var cantidad= aleatorio (0, 25);
var cantidad_cerdos = aleatorio (0, 6);

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png", 
    cargaOK: false
};

var cerdos = {
    url: "cerdo.png",
    cargaOK: false
}
fondo.imagen = new Image();
fondo.imagen.src= fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);


vaca.imagen = new Image();
vaca.imagen.src = vaca.url ;
vaca.imagen.addEventListener("load", cargarVacas);

cerdos.imagen = new Image();
cerdos.imagen.src = cerdos.url ;
cerdos.imagen.addEventListener("load", cargarCerdos);



function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdos.cargaOK = true;
  dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for (var v = 0; v<cantidad; v++)
        {
            var x= aleatorio ( 0,5);
            var y= aleatorio (0,5);
            var x= x*80;
            var y= y * 80;
            papel.drawImage(vaca.imagen, x, y);

        }
    }
    if(cerdos.cargaOK)
    {
        for (var v = 0; v<cantidad_cerdos; v++)
        {
            var x= aleatorio ( 0,4);
            var y= aleatorio (0,4);
            var x= x*50;
            var y= y * 50;
            papel.drawImage(cerdos.imagen, x, y);

        }
    }
}

function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random()*(maxi - min + 1))+min;
    return resultado;
}