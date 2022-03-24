async function cosumirAPi(URI,TOKEN){

    let parametros={
        method:"GET"
        headers:{Authorization:TOKEN}

    }

    let respueta =await fetch(URI,parametros){
        let respuetaFinal=respueta.json()
        return(respuetaFinal)
    }

    

}