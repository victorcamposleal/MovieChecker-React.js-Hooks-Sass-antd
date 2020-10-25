import React, {useState,useEffect} from 'react';
import{Modal}from 'antd';
import ReactPlayer from 'react-player';
import './ModalVideo.scss';

function ModalVideo(props) {
    const{videoKey,videoPlatform,isOpen,close}=props


    return(
<Modal className="modal-video"
visible={isOpen}
centered
onCancel={close}
footer={false}>

este es mi modal

    </Modal>

    )
    
}

export default ModalVideo;