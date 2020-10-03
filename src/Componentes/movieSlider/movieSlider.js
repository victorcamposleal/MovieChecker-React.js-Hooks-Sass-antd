import React from 'react';
//importamos de ant design el carrousel y el button
import{Carousel,Button} from "antd";
import{Link} from 'react-router-dom'; 
import Loading from '../Loading';


import './movieSlider.scss'

export default function MovieSlider(props) {
// se hacve el destructuring y se reciben las peliculas de home
const{movie}=props

// se hace una comporbacion para saber si el componente esta cargado o no

if(movie.loading||!movie.result){

return<Loading/>;

}

const {results}=movie.result;
console.log(results)

// abajo renderizremos todas las peliculas de la url para esto utilizaremos el foreach para recorrer todo el array
return(
<Carousel autoplay className="movie-slider">
 {results.map(movies=>{

     //cuando renderizamos en un map convienne agrear un key para despues hacer la busqueda o uso mas facil de los elemento renderizaldos en caso de que el objeto no tuviera un id le pasariamos un index y tuvieramos que escribior (movies,index) para que de esta manera se generara un index automatico
return(<Movies key={movies.id} movies={movies}/>)

}
)
} 
        </Carousel>)
}

function Movies (props) {
const {
    //hacemos una decosntruccion para sacar lo que nos interesas en este caso las constantes de abajo
    movies:
    {title,id,backdrop_path,overview}
}=props
const backdroPath=`https://image.tmdb.org/t/p/original/${backdrop_path}`;
//ponemos como backgroun la foto del poster de la pelicula

return(

<div className="movie-slider__movie" 
style={{backgroundImage:`url('${backdroPath}')`}}>
    <div className="movie-slider__movie-info">
        <div>
<h2>{title}</h2>
<p>{overview}</p>
<Link to={`/movie/${id}`}>
    <Button type="primary">More Information</Button>
</Link>
        </div>
</div>    
</div>  
    
    )
    
}







