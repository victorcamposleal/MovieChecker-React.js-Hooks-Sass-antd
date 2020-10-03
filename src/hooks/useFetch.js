import {useState,useEffect} from 'react';
function useFetch(url,options) {
///hacemos un estado para el loading
const[loading, setLoading]=useState(true);
//un estado para el contenido
const[result, setResult]=useState(null);
// hacamos un estado para el error
const[error,setError]=useState(null)
// ahora ponemos el useEffect
useEffect(() => {
 //creamos una fucnsion asincrona
    (async() => {
     try{
         //hasemos el fetch importante que despues de hacer un async tiene que ir un await
      const res=await fetch(url, options)
         //lo convertimos a json y con unn await tambien pñor que es uina fuincionn asyncroina y hasta que nop llegue una respuesta nop llega la otra
         
        const json= await res.json();
         //guardamos lo que obtenemos

         setResult(json)
         // al mismo tiempo tambien cambiamos el estadop de loading de true a false esto quiere decir that it finish the load
         setLoading(false);

     }
     catch(error){
setError(error)
        setLoading(false);

     }
    })()
    //en el array ponemos la varibles que queremos que se actulicen cada vez que hay un refresh en los datos
}, [options, url]);

return{loading,result,error}
    
}

export default useFetch;