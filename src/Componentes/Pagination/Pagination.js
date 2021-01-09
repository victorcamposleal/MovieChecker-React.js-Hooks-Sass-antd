import React from 'react';
import Pagination from 'rc-pagination';
import './Pagination.scss';

export default function PaginationMovies(props){
//se declaran las variables que vamos a usar
    const {currentPage,totalItems,onChangePage}=props

    return(
<Pagination
className="pagination"
current={currentPage}
total={totalItems}
pageSize={10}
onChange={onChangePage}



/>


    )


}