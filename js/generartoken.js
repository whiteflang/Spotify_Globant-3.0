export async function generartoken(){

    let URI="https://accounts.spotify.com/api/token"
    let Client_id="client_id=dbcd157fee1a444d84022c05ea178fac"
    let Client_secret="client_secret=7b74e81046ff4949b47d92e77c9aac5b"
    let grant_type="grant_type=client_credentials"
    
    let parametros={
        method:"POST",
        headers:{"content-Type":"application/x-www-form-urlencoded"},
        body:`${Client_id}&${Client_secret}&${grant_type}`
    }
 
  

    
   let respuesta=await fetch(URI,parametros)
   let infoToken=await  respuesta.json()

   let token=`${infoToken.token_type} ${infoToken.access_token}`
   
   return(token)

 }

  generartoken()
  
 
 
 
 
 