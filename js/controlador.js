
import {TOKEN} from './generartoken.js'
import {generaruri} from './generadoruri.js'
import {consumirAPI} from './servicios.js'

console.log(TOKEN)


let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let artistaselecionado=document.getElementById("artista").value
    console.log("la fruta selecionadad es :" + artistaselecionado)
    let URI=generaruri(artistaselecionado)
     async function activarAPI(){
        let datosConsultadosAPI=await consumirAPI(URI,TOKEN)

        console.log(datosConsultadosAPI)

    }


   
    activarAPI()


})



