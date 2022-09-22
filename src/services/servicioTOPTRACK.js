//import {generarURI} from '../helpers/generarURI.js'
//mport{PETICION} from '../helpers/constantesGET.js'


export async function consultarCanciones(URI,PETICION){

    let respuesta=await fetch(URI,PETICION)
    let canciones=await respuesta.json()
    return(canciones)


    
    /*.then(function (respuesta) {
        return respuesta.json()
    })
    .then(function (respuesta) {
        console.log(respuesta)          //Esta Forma Es Muy Larga Y Complicada
    })
    .catch(function (respuesta) {
        console.log(respuesta)
    })

    console.log(respuesta)*/
}