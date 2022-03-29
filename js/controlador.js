
import {generartoken} from './generartoken.js'
import {generaruri} from './generadoruri.js'
import {consumirAPI} from './servicios.js'
import {pintarCanciones} from './diseño.js'






let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let artistas=document.getElementById("artistas").value
    let URI=generaruri(artistas)
     async function activarAPI(){
        let token=await generartoken()
    
        let datosConsultadosAPI=await consumirAPI(URI,token)
        pintarCanciones(datosConsultadosAPI)

        

    

    }


     
    
    activarAPI()
    


})


