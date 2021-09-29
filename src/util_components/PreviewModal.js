import React , { useContext, useState } from 'react'
import '../styles/_preview.scss';
import { ModalContext } from '../helpers/contexts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function RenderPreview({title , btns , children}){
    return (
        <div className="preview-data">
            <div className="preview-heading">
                <h2>{title}</h2>
                <div className="btn-grp">
                    {btns.map((btn , index)=>{
                        return (
                            <button key={index} onClick={btn.callback}>{btn.label}</button>
                        )
                    })}
                </div>
            </div>
            {children}
        </div>
    )
}

function FileOptions({name , setFileName , options}){
    return (
        <div className="file-bottom-bar">
            <div className="file-name">
                <input type="text" onChange={(e)=>{
                    setFileName(e.target.value);
                }} defaultValue={name} placeholder={"File Name"}/>
                <i className="error">Invalid Name</i>
            </div>
            <div className="file-options">
                {options && options.map((option , option_index)=>{
                    if(option.type === 'combo'){
                        return (
                            <div className="file-option" key={option_index}>
                                <select onChange={(e)=>{option.setter(e.target.value)}}>
                                    {option.values.map((sub_option)=>{
                                        return <option key={sub_option} value={sub_option}>{sub_option}</option>
                                    })}
                                </select>
                            </div>
                        )
                    }
                    else if(option.type === 'textfield'){
                        return (
                            <div className="file-option textfield" key={option_index}>
                                <i tabIndex={0}><FontAwesomeIcon icon={faLink}/></i>
                                <input type="text" defaultValue={option.value} placeholder={option.placeholder} onChange={(e)=>{option.setter(e.target.value)}}/>
                            </div>
                        )
                    }
                    else if(option.type === 'file-button'){
                        return(
                            <div className="file-option" key={option_index}>
                                <div className="file-input">
                                    <span>{option.label}</span>
                                    <input type="file" onChange={(e)=>{
                                        option.setter(e.target.files[0]);
                                    }}/>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

function PreviewEditor({data , type}){
    if(type === 'code')
    return <div className="preview-editor">{data}</div>
    else if(type === 'image')
    return <img className="preview-image" src={data}/>
    else if(type === 'link')
    return <div className="preview-editor">{data}</div>
}

function PreviewModal({fileType , fileData , fileOptions , fileName , setFileName , isNew=false}) {
    const [{
        modal_visible,
        modal_children
    },set_modal] = useContext(ModalContext);
    if(fileType === 'code'){
            return <div className="preview-modal">
                <RenderPreview title={isNew ? "Create New Code File" : "Edit Code File"} btns={[
                    {
                        label : 'Save',
                        callback : ()=>{
                            console.log('new updated data' , fileData , fileName);
                        }
                    },
                    {
                        label : 'Cancel',
                        callback : ()=>{
                            set_modal(false , null);
                            console.log('cancelled edit');
                        }
                    }
                ]}>
                    <PreviewEditor data={fileData} type={fileType} setData={()=>{
                        console.log('Change file data here');
                    }}></PreviewEditor>
                    <FileOptions name={fileName} setFileName={setFileName} options={fileOptions}/>
                </RenderPreview>
            </div>
    }
    else if(fileType === 'image'){
        return <div className="preview-modal">
            <RenderPreview title={isNew ? "Add New Image" : "Change Image"} btns={[
                {
                    label : 'Save',
                    callback : ()=>{
                        console.log('new updated data' , fileData , fileName);
                    }
                },
                {
                    label : 'Cancel',
                    callback : ()=>{
                        set_modal(false , null);
                        console.log('cancelled edit');
                    }
                }
            ]}>
                <PreviewEditor data={fileData} type={fileType} setData={()=>{
                    console.log('change file data here');
                }}></PreviewEditor>
                <FileOptions name={fileName} setFileName={setFileName} options={fileOptions}/>
            </RenderPreview>
        </div>
    }
    else if(fileType === 'link'){
        return <div className="preview-modal">
            <RenderPreview title={isNew ? "Add New Link" : "Change Link"} btns={[
                {
                    label : 'Save',
                    callback : ()=>{
                        console.log('new updated data' , fileData , fileName);
                    }
                },
                {
                    label : 'Cancel',
                    callback : ()=>{
                        set_modal(false , null);
                        console.log('cancelled edit');
                    }
                }
            ]}>
            <PreviewEditor data={fileData} type={fileType} setData={()=>{
                console.log('change file data here');
            }}></PreviewEditor>
            <FileOptions name={fileName} setFileName={setFileName} options={fileOptions}/>
            </RenderPreview>
        </div>
    }
}

export default PreviewModal

