
import {TOKEN} from './generartoken.js'
import {generaruri} from './generadoruri.js'
import {consumirAPI} from './servicios.js'
import {pintarCanciones} from './diseño.js'

console.log(TOKEN)




let boton=document.getElementById("botn")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let artistas=document.getElementById("artistas").value
    let URI=generaruri(artistas)
     async function activarAPI(){
        let datosConsultadosAPI=await consumirAPI(URI,TOKEN)
        pintarCanciones(datosConsultadosAPI)

        

    

    }


     
    
    activarAPI()
    


})


