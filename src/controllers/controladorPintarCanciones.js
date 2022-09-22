export function pintarCanciones(canciones){

    let fila = document.getElementById("fila")
    
    fila.innerHTML = ""

    canciones.tracks.forEach(function(cancion){
    
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
      


    });

}