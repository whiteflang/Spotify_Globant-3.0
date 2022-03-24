 export async function consumirAPI(URI,TOKEN){

    let parametros={
        method:"GET",
        headers: {Authorization:TOKEN}

    }

    let respueta =await fetch(URI,parametros)
    {
        let respuestaFinal=respueta.json()
        return(respuestaFinal)
    }


}

