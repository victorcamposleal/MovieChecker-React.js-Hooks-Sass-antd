import React from 'react';
import {Link} from 'react-router-dom'
import './Error404.scss'


function Error404() {

return(
<div className="error404">
    <h1>Error 404
    </h1>
    <h2>Pàgina no encontrada</h2>

<Link to="/">
    <h3> volver a Home</h3>
    </Link>

</div>

)
    
}

export default Error404