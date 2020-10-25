import React from 'react';
import useFetch from "../hooks/useFetch"
import{URL_API,API} from'../utils/constants'
import MovieList from '../Componentes/MovieList'
import MovieSlider from'../Componentes/movieSlider'
import { Row,Col } from 'antd';




function Home() {


    // //declaramos una variable a la cual le daremos el url para que se haga el fecth asi que fetch lo usamos como una funcion que en este caso creamos un hook como si fures componente y lo utilizamos como funcion que nos devuelve tres cosas acordarse que la url tiene que ir en string
const movie=useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=en-US&page=1`);
const moviePopular=useFetch(`${URL_API}/movie/popular?api_key=${API}&language=en-US&page=1`);
const topRatedMovie=useFetch(`${URL_API}/movie/top_rated?api_key=${API}&language=en-US&page=1`);
    return (
        <>
        <MovieSlider movie={movie}/>
        <Row>
            
            <Col span={12}>
          <MovieList movies={moviePopular} title="Popular Movies"  />
            </Col>
            <Col span={12}>
            <MovieList movies={topRatedMovie} title="Top Movies"  />
            </Col>
        </Row>
        </>
    )
    
}

export default Home