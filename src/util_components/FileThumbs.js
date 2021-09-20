import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {  faLink , faPlusCircle , faTerminal , faImage } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomSVGIcon from '../util_components/CustomSVGIcon';
import '../styles/fileThumbs.scss';

export const AddNewFileThumb = ()=>{
    return <div className="file-thumb empty">
        <FontAwesomeIcon icon={faPlusCircle}/>
        <h4>Add New</h4>
    </div>
}

export const FileThumb = ({type , name})=>{
    const returnIconFromType = (type)=>{
        switch (type){
            case 'code' : return faTerminal;
            case 'image' : return faImage;
            case 'link' : return faLink;
        }
    }
    return <div className="file-thumb">
        <CustomSVGIcon icon={returnIconFromType(type)}/> 
        <span>{name}</span>
        <div className="edit-options">
            <CustomSVGIcon className="delete" icon={faTrashAlt}/>
        </div>
    </div>
}