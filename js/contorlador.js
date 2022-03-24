
import {TOKEN} from './generartoken.js'
import {generaruri} from './generadoruri.js'
import {consumirAPi} from './servicios.js'

console.log(TOKEN)


let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let frutaSeleccionada=document.getElementById("artista").value
    console.log("la fruta selecionadad es :" + frutaSeleccionada)
    let URI=generaruri(frutaSeleccionada)
     async function activarAPI(){
        let datosConsultadosAPI=await consumirAPi(URI,TOKEN)

        console.log(datosConsultadosAPI)

    }


   
    activarAPI()


})



