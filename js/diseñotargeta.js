export function pintartarjeta(contenedores){ 

    let playcancion=document.querySelector("#audio")
    let imagen=document.querySelector("#imagent > img")
    let titulo=document.querySelector("#titulo" )

    

  




     contenedores.forEach(contenedor=>{

        contenedor.contenedoreaudio.onplay=function(){
            
            imagen.src=contenedor.contenedoreaudio.parentNode.previousSibling.children[0].src

            playcancion.src=contenedor.contenedoreaudio.parentNode.children[1].src

      

            



        }
        
        
    });

    

    


  }


