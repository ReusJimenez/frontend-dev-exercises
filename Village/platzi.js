var vp=document.getElementById("villaPlatzi");
var papel=vp.getContext("2d");

var fondo = {
  url: "tile.webp",
  cargaOK: false
}
var vaca = {
  url: "vaca.webp",
  cargaOK: false
}

var cerdo = {
  url: "cerdo.webp",
  cargaOK: false
}

var cantidad=aleatorio(5,20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

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
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0)
  }
  if(vaca.cargaOK)
  {
    for(v=0; v<cantidad; v++)
    {
      var x=aleatorio(0,6);
      var y=aleatorio(0,6);
      var x=x*60;
      var y=y*60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    for(v=0; v<cantidad; v++)
    {
      var x=aleatorio(0,5);
      var y=aleatorio(0,5);
      var x=x*70;
      var y=y*70;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}

function aleatorio(mini, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random()*(maxi-mini+1))+mini;
  return resultado;
}
