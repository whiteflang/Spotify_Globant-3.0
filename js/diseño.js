export function pintarCanciones(pistas){

    let listacanciones=document.getElementById("listacanciones")
    

    listacanciones.innerHTML=""


    let contenedores=pistas.tracks.map(function(cancion){ 

      let cancionindividual=document.createElement("div")

      cancionindividual.classList.add("grid","bg-stone-800","grid","grid-cols-4","hover:bg-stone-700","mb-3","ml-3","rounded-bl-lg","rounded-tl-lg")

      let contenedorimagen=document.createElement("div")

      contenedorimagen.classList.add("grid","col-span-2","rounded-bl-lg","rounded-tl-lg")

      let imagen=document.createElement("img")

      imagen.classList.add("w-screen","rounded-bl-lg","rounded-tl-lg") 
     
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

      return{contenedorimagent:imagen,
             contenedornombre:nombre,
            contenedoreaudio:audiocancion}

    }) 
    
  return contenedores}

  
