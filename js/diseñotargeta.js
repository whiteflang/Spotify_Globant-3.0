export function pintartarjeta(contenedores){ 


    let imagen=document.querySelector("#imagent > img")

  

     contenedores.forEach(contenedor=>{

        contenedor.contenedoreaudio.onplay=function(){


            imagen.src=contenedor.contenedoreaudio.parentNode.previousSibling.children[0].src
            

        }
        
        
    });

    

    


  }


