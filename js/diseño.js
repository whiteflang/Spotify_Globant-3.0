export function pintarCanciones(pistas){

    let listacanciones=document.getElementById("listacanciones")

    listacanciones.innerHTML=""

    pistas.tracks.forEach(function(cancion){ 

      let cancionindividual=document.createElement("div")

      cancionindividual.classList.add("bg-zinc-700")

      let contenedorimagen=document.createElement("div","flex-row")

      let imagen=document.createElement("img")

      imagen.classList.add("h-[65px]","mx-auto","basis-1/2") 
     
      imagen.src=cancion.album.images[0].url


      let separador = document.createElement("hr")

      separador.classList.add("w-50")
      separador.classList.add("mx-auto")
     

      let contenedorfinal=document.createElement("div")
      contenedorfinal.classList.add("px-3")
      contenedorfinal.classList.add("text-center")



      let nombre = document.createElement("h2")
      nombre.textContent=cancion.name

      let audiocancion= document.createElement("audio",)
      
      audiocancion.src=cancion.preview_url
      audiocancion.setAttribute("controls","controls",)

      contenedorfinal.appendChild(nombre)
      contenedorfinal.appendChild(audiocancion)
      contenedorimagen.appendChild(contenedorfinal)
      contenedorimagen.appendChild(imagen)
      cancionindividual.appendChild(contenedorimagen)
      
      cancionindividual.appendChild(contenedorfinal)
      listacanciones.appendChild(cancionindividual)

    }) 
    
    
    }