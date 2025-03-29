var expreso = require("express");
var aplicacion = expreso();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
  resultado.send("Este es el Home");
}

function cursos(peticion, resultado)
{
  resultado.send("Este son los cursos");
}

aplicacion.listen(8989)
