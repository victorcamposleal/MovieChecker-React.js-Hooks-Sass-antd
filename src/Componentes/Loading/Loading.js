import React from 'react';
//importamos de ant design el carrousel y el button
import{Spin} from "antd";
import './Loading.scss'

function Loading() {
    return(<div className="loading">
<Spin size='large'/>
cargando.....

    </div>)
}

export default Loading

