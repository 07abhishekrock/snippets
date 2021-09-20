import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/_misc.scss';

function CustomSVGIcon({icon , svg , round , className}) {
    if(icon){
        return (
            <i className={"icon " + className} round={round ? "1" : "0"}>
                <FontAwesomeIcon icon={icon}/>
            </i>
        )
    }
    else{
        return (
            <i className={"icon " + className}  round={round ? "1" : "0"} style={{backgroundImage : `url(${svg})`}}></i>
        )
    }
}

export default CustomSVGIcon
