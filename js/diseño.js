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
     
     

      let contenedorfinal=document.createElement("div")
      contenedorfinal.classList.add("w-screen","text-white","ml-3", "font-sans","italic")
      



      let nombre = document.createElement("h2")
      nombre.textContent=cancion.name

      let audiocancion= document.createElement("audio",)
      
      audiocancion.src=cancion.preview_url
      audiocancion.setAttribute("controls","controls",)

      let popularidad= document.createElement("h4")

      popularidad.textContent=cancion.popularity

      contenedorfinal.appendChild(popularidad)
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

  
