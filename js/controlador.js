
import {generartoken} from './generartoken.js'
import {generaruri} from './generadoruri.js'
import {consumirAPI} from './servicios.js'
import {pintarCanciones} from './diseño.js'
import {pintartarjeta} from './diseñotargeta.js'






let boton=document.getElementById("botn")
boton.addEventListener("click", async function(evento){
    evento.preventDefault()
    let artistas=document.getElementById("artistas").value
    let URI=generaruri(artistas)
    let token= await generartoken()
    
    console.log(token)
     async function activarAPI(){
        

        let datosConsultadosAPI=await consumirAPI(URI,token)
        let contenedores=pintarCanciones(datosConsultadosAPI)
        pintartarjeta(contenedores)
        


    

    }


     
    
    activarAPI()
    


})


