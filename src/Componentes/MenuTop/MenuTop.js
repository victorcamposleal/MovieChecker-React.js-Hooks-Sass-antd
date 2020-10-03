import React from 'react';
import{Menu} from "antd";
import{Link}from 'react-router-dom';
//utilizaremos la imagen como si fuera componente y le pondremos el nombre de LOgo
import {ReactComponent as Logo} from "../../assets/img/popcorn.svg.svg"

import "./MenuTop.scss";
function MenuTop() {

    return(


<div className='menu-top'> 
<div className='menu-top__logo'>
    <Logo/>
</div>
<Menu
theme="dark"
mode="horizontal"
defaultSelectedKeys={["1"]}
stye={{lineHeight:"80px"}}>

<Menu.Item key="1">
<Link to="/">Home</Link>
</Menu.Item>
<Menu.Item key="2">
<Link to="/new-movies">Latest Movies</Link>
</Menu.Item>
<Menu.Item key="3">
<Link to="/popular-movie">Popular Movies</Link>
</Menu.Item>
<Menu.Item key="4">
<Link to="/search">Search</Link>
</Menu.Item>
</Menu>

</div>

    )
    
}

export default MenuTop