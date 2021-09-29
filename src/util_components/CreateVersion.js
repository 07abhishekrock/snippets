import InputGroup from '../util_components/InputGroup';
import { useContext , useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal , faImage , faLink, faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { AddNewFileThumb } from '../util_components/FileThumbs';
import { FileThumb } from '../util_components/FileThumbs';
import { ModalContext } from '../helpers/contexts';
import PreviewModal from './PreviewModal';

const CreateVersion = ({resetBtnText , resetCallback , submitCallback , version_form})=>{
    const [{
        modal_visible , modal_data
    } , set_modal] = useContext(ModalContext);
    const setFileNameFunction = (field , new_name , file_object)=>{
        version_form.setFieldValue(field , version_form.values[field].map((old_file_object)=>{
            if(file_object.id === old_file_object.id) old_file_object.name = new_name;
            return old_file_object;
        }));
    };
    const [new_code_file , set_new_code_file] = useState({
        name : 'untitled',
        data : '',
        lang : 'Javascript',
    });
    const [new_image_file , set_new_image_file] = useState({
        name : 'untitled',
        data : '',
    });
    const [new_link , set_new_link] = useState({
        name : 'My New Link',
        data : ''
    })
    return (
        <div className="wide form">
            <div className="form-flex">
                <div className="form-section">
                    <InputGroup type="text" label="Version Code" placeholder="Give Your Version a name" form={version_form} name="versionCode"/>
                    <InputGroup type="textarea" label="Describe Version" placeholder="Describe your version" form={version_form} name="versionDesc"/>
                </div> 
                <div className="form-section wide">
                    <h2>Add Files Here</h2>
                    <div className="add-files-section">
                        <h3><FontAwesomeIcon icon={faTerminal}/>Codes</h3>
                        <div className="files-flex">
                            {
                                version_form.values.codes.map((code)=>{
                                    return <FileThumb key={code.id} type="code" name={code.name} onClick={()=>{
                                        set_modal(
                                            true , <PreviewModal fileType="code" fileName={code.name} fileData={code.data} setFileName={setFileNameFunction.bind(null , "codes" , code)} fileOptions={[
                                                {
                                                    type : 'file-button',
                                                    label : <><FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>&nbsp;Import</>,
                                                },
                                                {
                                                    type : 'combo',
                                                    setter : (value)=>{
                                                        const new_codes = version_form.values.codes.map((old_code)=>{
                                                            if(code.id === old_code.id) old_code.lang = value;
                                                            return old_code;
                                                        })
                                                        version_form.setFieldValue('codes', new_codes);
                                                    },
                                                    values : ['Javascript', 'HTML' , 'CSS']
                                                }
                                            ]}/>
                                        )
                                    }}/>
                                })
                            }
                            <AddNewFileThumb type="code" onClick={()=>{
                                set_modal(
                                    true , <PreviewModal isNew fileType="code" fileName={new_code_file.name} fileData={new_code_file.data} setFileName={(new_name)=>{
                                        const new_file_data = {...new_code_file , name : new_name};
                                        set_new_code_file(new_file_data);
                                    }} fileOptions={[
                                        {
                                            type : 'file-button',
                                            label : <><FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>&nbsp;Import</>,
                                        },
                                        {
                                            type : 'combo',
                                            setter : (value)=>{
                                                const code_with_new_lang = {...new_code_file , lang : value};
                                                set_new_code_file(code_with_new_lang);
                                            },
                                            values : ['Javascript', 'HTML' , 'CSS']
                                        }
                                    ]}></PreviewModal>
                                )
                            }}/>
                        </div>
                    </div>
                    <div className="add-files-section">
                        <h3><FontAwesomeIcon icon={faImage}/>Images</h3>
                        <div className="files-flex">
                            {version_form.values.images.map((image)=>{
                                return <FileThumb key={image.id} type="image" name={image.name} onClick={()=>{
                                    set_modal(
                                        true , <PreviewModal fileType="image" fileName={image.name} fileData={image.url} setFileName={setFileNameFunction.bind(null , 'images' , image)} fileOptions={[
                                            {
                                                type : 'file-button',
                                                label : <><FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>&nbsp;Import</>
                                            },
                                            {
                                                type : 'textfield',
                                                placeholder : 'Enter Link Here',
                                                value : image.url,
                                                setter : (new_url) => {
                                                    const new_images = version_form.values.images.map((old_image)=>{
                                                        if(old_image.id === image.id){
                                                            old_image.url = new_url;
                                                        }
                                                        return old_image;
                                                    });
                                                    version_form.setFieldValue('images',new_images);
                                                }
                                            }
                                        ]}/>
                                    )
                                }}/>
                            })}
                            <AddNewFileThumb type="image" onClick={()=>{
                                set_modal(
                                    true , <PreviewModal isNew fileType="image" fileName={new_image_file.name} fileData={new_image_file.data} setFileName={(new_name)=>{
                                        const new_file_data = {...new_image_file , name : new_name};
                                        set_new_code_file(new_file_data);
                                    }} fileOptions={[
                                        {
                                            type : 'file-button',
                                            label : <><FontAwesomeIcon icon={faFileUpload}></FontAwesomeIcon>&nbsp;Import</>,
                                        },
                                        {
                                            type : 'textfield',
                                            placeholder : 'Enter Link Here',
                                            value : new_image_file.url,
                                            setter : (new_url) => {
                                                const new_file_data = {
                                                    ...new_image_file,
                                                    url : new_url,
                                                }
                                                set_new_image_file(new_file_data);
                                            }
                                        }
                                    ]}></PreviewModal>
                                )
                            }}/>
                        </div>
                    </div>
                    <div className="add-files-section">
                        <h3><FontAwesomeIcon icon={faLink}/>Links</h3>
                        <div className="files-flex">
                            {version_form.values.links.map((link)=>{
                                return <FileThumb key={link.id} type="link" name={link.name} onClick={()=>{
                                    set_modal(
                                        true , <PreviewModal fileType="link" fileName={link.name} fileData={link.url} setFileName={setFileNameFunction.bind(null , 'links' , link)} fileOptions={[
                                            {
                                                type : 'textfield',
                                                placeholder : 'Enter Link Address Here',
                                                value : link.url,
                                                setter : (new_url)=>{
                                                    const new_links = version_form.values.links.map((old_link)=>{
                                                        if(old_link.id === link.id) old_link.url = new_url;
                                                        return old_link;
                                                    });
                                                    version_form.setFieldValue('links',new_links);
                                                }
                                            }
                                        ]}/>
                                        )
                                    }}/>
                                })}
                            <AddNewFileThumb type="link" onClick={()=>{
                                set_modal(
                                    true , <PreviewModal isNew fileType="link" fileName={new_link.name} fileData={new_link.data} setFileName={(new_name)=>{
                                        const new_file_data = {...new_link , name : new_name};
                                        set_new_code_file(new_file_data);
                                    }} fileOptions={[
                                            {
                                                type : 'textfield',
                                                placeholder : 'Enter Link Address Here',
                                                value : new_link.url,
                                                setter : (new_url)=>{
                                                   const new_file_data = {
                                                       ...new_link,
                                                       url : new_url,
                                                   } 
                                                   set_new_link(new_file_data);
                                                }
                                            }
                                        ]}></PreviewModal>
                                )
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-button-group">
                <button onClick={(e)=>{
                    e.preventDefault();
                    if(resetCallback){
                        resetCallback();
                    }
                }}>{resetBtnText}</button>
                <button onClick={submitCallback}>Add Version</button>
            </div>
        </div>
    )
}
export default CreateVersion;