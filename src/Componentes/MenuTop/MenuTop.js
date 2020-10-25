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
theme="light"
mode="horizontal"
defaultSelectedKeys={["1"]}
style={{marginTop:"0px",marginBottom:"0px", lineHeight:"62.5px"}}
>

<Menu.Item key="1">
<Link to="/"><p>Home</p></Link>
</Menu.Item>
<Menu.Item key="2">
<Link to="/new-movies"><p>Latest Movies</p></Link>
</Menu.Item>
<Menu.Item key="3">
<Link to="/popular-movie"><p>Popular Movies</p></Link>
</Menu.Item>
<Menu.Item key="4">
<Link to="/search"><p>Search</p></Link>
</Menu.Item>
</Menu>

</div>

    )
    
}

export default MenuTop