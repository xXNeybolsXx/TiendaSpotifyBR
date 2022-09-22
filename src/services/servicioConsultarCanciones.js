let URI;

let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function (evento) {

    evento.preventDefault()

    let artista=document.getElementById("artista").value
    console.log(artista)

    URI=`https://api.spotify.com/v1/artists/${artista}/top-tracks?market=US`

    const TOKEN = "Bearer BQAJBPeG2f27RefQOPztKoFIDO_8uLpWdyA17KK0mepiwLQNKc45DjsIoGTCdTQ8WADLfdpqt5VQRuVqh3i5gGXb8kjWlC9oZcn5dR-lCHDqF7QluGnGfzl28HLFYftPEnHTHGcwd4qPESaCnory2dOCs3XCvjzpMfaAVc1R8C_jyWa8biwyE9W1_5_whPY"

    //console.log("Haciendo Click")

    const PETICION = {
        method:"GET",
        headers:{Authorization:TOKEN}
    
    }
    fetch(URI , PETICION)
    .then(function (respuesta) { //Revisar Que Sean JSON
    
        return respuesta.json()
        
    })
    .then(function (respuesta) {   //Hago Lo Que Quiera Con Respuesta
        console.log(respuesta)
        console.log(respuesta.tracks)   //Accedo A Un Atributo De La Respuesta
    
        //Recorrer Un Arreglo
    
        let fila = document.getElementById("fila")
    
        fila.innerHTML = ""
    
        respuesta.tracks.forEach(function(cancion){
    
            let columna=document.createElement("div")
            columna.classList.add("col")
    
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","shadow")
    
            let audio=document.createElement("audio")
            audio.classList.add("w-100")
            audio.setAttribute("controls","controls")
            audio.src=cancion.preview_url
    
            let imagen=document.createElement("img")
            imagen.classList.add("w-100","h-100","card","img-fluid")
            imagen.src=cancion.album.images[0].url
    
            let nombre=document.createElement("h6")
            nombre.classList.add("fw-bold","text-center")
            nombre.textContent=cancion.album.name

            let popularidad=document.createElement("p")
            popularidad.classList.add("text-warning","text-center")
            popularidad.textContent="Popularidad: "+cancion.popularity
    
            //PADRES E HIJOS
            tarjeta.appendChild(imagen)
            tarjeta.appendChild(audio)
            tarjeta.appendChild(nombre)
            tarjeta.appendChild(popularidad)
            columna.appendChild(tarjeta)
            fila.appendChild(columna)
            
    
            
    
    
    
            //console.log(cancion)
            //console.log(cancion.name)
            //console.log(cancion.preview_url)
            //console.log(cancion.album.images[0].url)
            //console.log(cancion.popularity)
            //console.log(cancion.album.name)
            //console.log(cancion.album.relase_date)
    
    
        });
    
    })
    .catch(function (respuestaError) {
        console.log(respuestaError)
    })
})  


/*let buscar=document.getElementById("buscar")
buscar.addEventListener("click",function (evento) {

    evento.preventDefault()

    let artista=document.getElementById("artista").value
    console.log(artista)

    URI=`https://api.spotify.com/v1/${artista}/top-tracks?market=US`

    //console.log("Haciendo Click")
})*/



//Receta Para Consumir APIS Con JS PURO

//Paso 1: Si Yo  quiero Consumir Un API Y A Que Servicio..
//DEBO CONFIGURAR LA URI

//const URI = "https://api.spotify.com/v1/artists/1TA5sGRlKUJXBN4ZyJuDIX/top-tracks?market=US"

//Paso 2: Configuro Datos Especiales O DE CONTROL  En El Servidor 

//const TOKEN = "Bearer BQD-CzYPHeyEPJm4PcZHslguLZ2ohmiU_YIq35Jlm7dLZGx4VyJHSTcJiHakurcLSNBagLiabkCxCwewxzfck6L3Q4IaWiANXpVnlArnDS42gbtU1KtqWUZpkeo_jzJyOpXqr03gjl9Aeu3fUVyBA9WQ_AubmetEmUFCSeFsFw_CyoK6SH8gqlH_2ubMEUg"

//Paso 3: Configuro La Petición
//NOTA : Solo POST Y PUT CONFIGURAN BODY
//Para JS La Petición Es Un OBJETO

/*const PETICION = {
    method:"GET",
    headers:{Authorization:TOKEN}

}

//Paso 4: ARRANQUE PUES MIJO
//Consuma El API

fetch(URI , PETICION)
.then(function (respuesta) { //Revisar Que Sean JSON
    
    return respuesta.json()
    
})
.then(function (respuesta) {   //Hago Lo Que Quiera Con Respuesta
    console.log(respuesta)
    console.log(respuesta.tracks)   //Accedo A Un Atributo De La Respuesta

    //Recorrer Un Arreglo

    let fila = document.getElementById("fila")

    respuesta.tracks.forEach(function(cancion){

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow")

        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url

        let imagen=document.createElement("img")
        imagen.classList.add("w-100","h-100","card","img-fluid")
        imagen.src=cancion.album.images[0].url

        let nombre=document.createElement("h6")
        nombre.classList.add("fw-bold","text-center")
        nombre.textContent=cancion.album.name

        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        tarjeta.appendChild(audio)
        tarjeta.appendChild(nombre)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        

        



        //console.log(cancion)
        //console.log(cancion.name)
        //console.log(cancion.preview_url)
        //console.log(cancion.album.images[0].url)
        //console.log(cancion.popularity)
        //console.log(cancion.album.name)
        //console.log(cancion.album.relase_date)


    });

})
.catch(function (respuestaError) {
    console.log(respuestaError)
})*/