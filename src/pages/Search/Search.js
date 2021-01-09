import React, {useEffect,useState} from 'react';
import {Row,Col,Input} from "antd"
//withRouter sirve para
import {withRouter} from "react-router-dom";
import queryString from'query-string';
import MovieCatalog from '../../Componentes/MovieCatalog'
import Footer from '../../Componentes/Footer'
import {URL_API,API} from'../../utils/constants'

import "./Search.scss"
import MovieList from '../../Componentes/MovieList';


function Search(props) {
//declaramos las variables para hacer el search
const { location,history}=props;
const[movieList,setMovieList]=useState([]);
const[ searchValue,setSearchValue]=useState("")
useEffect(()=>{
// se hac una funcion asyncrona para que no me devuelva una promesa y me devuelva unos valores
    (async ()=>{
//lo que hace el query string es que te regresa un objeto con los parametros de la busqueda es por eso que lo ponemos
const searchValue=queryString.parseUrl(location.search)
//hacemos un destructuring del objeto searchValue{} que generamos arriba cogemos el parametro s de search, que es lo que buscamos 
const {s}=searchValue.query;
console.log(s);
// una vez leida la documentacion de the movie db hacemos un nuestro fetch utilizando, los utils que son las constantes de la api de the movie db y nuestro query string que es la palabra que nosotros pondremos en la seccion de busques 
const response= await fetch(
    `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
);
//ponemos la variable donde guardaremos el objeto que recibimos de la api
const movies=await response.json();
setSearchValue(s)
setMovieList(movies)
console.log(movies)

    })();



//cada vez que location y history cambien esto se refrescara y cambiara automaticamente
},[location.search]


)
//hacemos una funcion que se se llame onchangeSearch y lo enlazamos con el input para que cada vez que escriban algo se vaya refrescando el input
const onChangeSearch=e=>{
//conseguimos los parametros de la url
const urlParams=queryString.parse(location.search);
//los actualizamos los parametros

urlParams.s=e.target.value;
console.log(queryString.stringify(urlParams))
//refrescamos la url
history.push(`?${queryString.stringify(urlParams)}`)
// y actualizamos el valor del searchrvalue
setSearchValue(e.target.value)


}

return(
 <Row>
   
 <Col span={12} offset={6} className="search">
<h1>Search your favorite movie</h1>
</Col>
<Col span={12}offset={8}  className="search">

<input value={searchValue} onChange={onChangeSearch}/>
</Col>


 {movieList.results && (

    <Col span={24}>
<Row><MovieCatalog movies={movieList}/></Row>
     </Col>

  )}

  <Col span={24}>
      <Footer/>
</Col>
</Row>

)
    
}

export default withRouter (Search)
