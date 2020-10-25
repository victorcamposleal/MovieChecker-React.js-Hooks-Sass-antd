import React from 'react';
//importamos de ant design lista, avatar , button
import{List,Button,Avatar} from "antd";
import { RightCircleOutlined } from '@ant-design/icons';
import{Link} from 'react-router-dom';
import Loading from '../Loading'

import './MovieList.scss';
import MovieSlider from '../movieSlider';

export default function MovieList(props) {
    const{movies,title }=props;


     if(movies.loading||!movies.result){

         return<Loading/>;
}        


console.log(movies.result.results)


    return(

     <>
 
    <List
     className="movie-list"
     size="default"
     header={<h2>{title}</h2>}
    bordered
    //b  
    dataSource={movies.result.results}
//render Item es una manera de renderizar en la pagina web todo el contenido sin usar el map Movie sera nuestra variable renderizada
renderItem={ movie=> <MovieRender movie={movie}/>}>
 </List>  
     </>
 )
    
};


 function MovieRender(props) {
  
     //hacemos destructuring de el componente movie que le pasamnos por medio de renderItem.
 const {movie:{title,poster_path,id}}=props
//abajo tenemos el List.Item que es donde extraeremos la informacion que necesitamos para mostrar en la lista y tambien tenemos List.Item.Meta que es lo que contine la informacion y puede tener avatars y y este tipo de cosas
 const poster=`https://image.tmdb.org/t/p/original/${poster_path}`
 return(
  <List.Item className="movie-list__movie">
<List.Item.Meta
 title={<Link to={`/movie/${id}`}>{title}
</Link>}
 avatar={<Avatar src={poster} shape="square" size={48}  />}
 />
<Link to={`/movie/${id}`}>
    <Button type="primary" shape="circle" icon={<RightCircleOutlined/>} />
      
</Link>

</List.Item>
);
}