import React from 'react';
import {Col,Card,Icon} from 'antd';
import {Link} from 'react-router-dom'

import './MovieCatalog.scss'


function MovieCatalog(props) {
    const {movies:{results}}=props
    console.log(results)
    
//we make a map usin arrow functions we put () after movie so we dont have to use another return
   return results.map(movie=> (// the colum will occupy 4 positions with the xs       
<Col key={movie.id} xs={4} className="movie-catalog">
<MovieCard movie={movie}/>
 </Col>));

    
}

function MovieCard(props) {

const {movie:{id,title,poster_path}}=props
//we use this meta to take out the component from ant d
   const {Meta}=Card;
   const posterPath=`https://image.tmdb.org/t/p/original/${poster_path}`;

 return (
<Link to={`/movie/${id}`}>
<Card  hoverable
style={{width:240}}
cover={<img alt={title}src={posterPath}/>}>

<Meta title={title}/>

</Card>
    </Link>





 )
    
}

export default MovieCatalog;