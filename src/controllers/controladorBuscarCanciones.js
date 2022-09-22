import {generarURI} from '../helpers/generarURI.js'

import{consultarCanciones} from '../services/servicioTOPTRACK.js'

import{PETICION} from '../helpers/constantesGET.js'

import{pintarCanciones} from './controladorPintarCanciones.js'

let buscar =document.getElementById("buscar")
buscar.addEventListener("click",function(evento){
    evento.preventDefault()

    //Obtener El Id Del Artista Que Busca El Usuario

    let idArtistaSeleccionado=document.getElementById("artista").value

    let uri = generarURI(idArtistaSeleccionado)

    //Llamando Al Servicio (Asincrono) Desde El Controlador

    consultarCanciones(uri,PETICION)
    .then(function (canciones) {

        pintarCanciones(canciones)

    })
    
})