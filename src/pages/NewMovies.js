import React, { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import { URL_API, API } from '../utils/constants'
import MovieCatalog from '../Componentes/MovieCatalog'
import Pagination from '../Componentes/Pagination'
import Footer from '../Componentes/Footer';
import Loading from '../Componentes/Loading'

function NewMovies() {
    const [movieList, setMovieList] = useState({});
    const [page, setPage] = useState(1);
    // We make the use effect to make the traditional fetch 
    useEffect(() => {
        // we make the function async because we are asking to the data base for information and in case we dont receive the information we putasyn
        (async () => {
            // because the function is async we have to put await so we can receive the information correctly
            const response = await fetch(`${URL_API}/movie/now_playing?api_key=${API}&lenguage=es-ES&page=${page}`)
            // once we receive the information we have to put await the next fuintion too
            const movies = await response.json()
            //using react hooks we set the data that we obatain from the api
            setMovieList(movies)
        })();

    }, [page])

  // esta función flecha lo que hace es que cuando la pagina cambia se refresca y pasa como parametro la pagina actualcon este Onchange 
const onChangePage=page=>{
    setPage(page)
}

    return (
        <Row>
            <Col span="24" style={{ textAlign: "center", marginTop: 25 }}>
                <h1 style={{ fontSize: 35, fontWeight: "bold" }}>

                    ultimos lanzamientos
</h1>


            </Col>
            {movieList.results ? (
           <Row> 
            <Col span="24">
            <Row> <MovieCatalog movies={movieList}/></Row>
            </Col>

<Col span="50">

<Pagination

currentPage={movieList.page}
 totalItems={movieList.total_results}
 onChangePage={onChangePage}/>

</Col>
</Row>
            
            ) : (<Col span="24"><Loading /></Col>)

}

<Col span={24}>
                <Footer />

            </Col>
         
</Row>
    )
}

export default NewMovies
