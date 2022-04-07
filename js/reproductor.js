

export function reproductormusica(contenedores){

    let audio= document.querySelector("#audio ")
    let playPausa= document.querySelector("#play")

    playPausa.addEventListener("click",()=>{
        if(audio.play){
            audio.pause();
        }
        else{audio.play();

       

    }  

    


});


}






