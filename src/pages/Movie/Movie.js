import React, {useState} from 'react';
import { Row, Col, Button } from 'antd';
//to use the parameters from the url we have to use a hook named use params in this case we will use the id of the movie
import { useParams } from 'react-router-dom';
import { moment } from 'moment';
import useFetch from '../../hooks/useFetch'
import { URL_API, API } from '../../utils/constants'
import Loading from '../../Componentes/Loading'
import ModalVideo from'../../Componentes/ModalVideo'

import './Movie.scss'


function Movie() {
    // Al momeneto de hacer click en la movie cogemos el id pormedio de lo Link react-router-dom traemos el id al momento que ha
    const { id } = useParams();

    const peli = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=en-US&page=1`);

    //const backdroPath=`https://image.tmdb.org/t/p/original/${backdrop_path}`



    if (peli.loading || !peli.result)
        return (<Loading />)


    return (

        <Pelis peli={peli.result} />
    )

}

export default Movie


function Pelis(props) {

    const { peli: { id, overview, backdrop_path, title, poster_path, } } = props


    const backgorund = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    return (

        <div className="movie" style={{backgroundImage:`url(${backgorund})`}}>

            <div className="movie__dark"/>

            <Row>
                <Col span={8} offset={3} className="movie__poster">

                    <PosterMovie image={poster_path}/>
                </Col>


            <Col span={10} className="movie__info">

                <MovieInfo movieInfo={props.peli}/>            
            
            
            </Col>
            
            </Row>

            
           
        </div>
    )

}


function PosterMovie(props) {
const{image}=props


const posterPath = `https://image.tmdb.org/t/p/original/${image}`;

return(<div   style={{backgroundImage:`url(${posterPath})`}}/>)

    

}
function MovieInfo(props){
 
 const{movieInfo:{id,title,release_date,overview,genres}}=props;
 const[modalOn,setModalOn]=useState(false);
 const videoMovie=useFetch(`${URL_API}/movie/${id}/videos?api_key=${API}&language=en-US`)
 console.log(videoMovie)
const opeModal=()=>setModalOn(true);
const closeModal=()=>setModalOn(false);
const renderVideo=()=>{
    if(videoMovie.result){
        if(videoMovie.result.results.lenght > 0){
            return(
                <>
<Button onclik={opeModal}>
    Ver Trailer
    </Button>
    <ModalVideo videoKey={videoMovie.result.results[0].key}
    videoPlatform={videoMovie.result.results[0].site}
    isOpen={modalOn}
    close={closeModal}/>
                </>
            )
        }
    }
}

    return(
<>
<div className="movie__info-header">
<h1>
    {title}
    <span>{release_date}</span>
{renderVideo()}
</h1>



</div>
<div className="movie__info-content">
    <h3>General</h3>
    <p>{overview}</p>
<h3>Generos</h3>
{genres.map(genere=>(
<li key={genere.id}> {genere.name} </li>)
)
}  

<ul>

 </ul>   


</div>


</>


    )





}
