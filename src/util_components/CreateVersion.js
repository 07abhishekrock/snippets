import { useFormik } from "formik";

const CreateVersion = ({resetBtnText , resetCallback , submitCallback})=>{
    const version_form = useFormik({
        initialValues : {
            
        }
    })
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();

        }}>
            <div className="wide form">
                <div className="form-flex">
                    <div className="form-section">
                        <InputGroup type="text" label="Version Code" placeholder="Give Your Version a name" form={form} name="versionCode"/>
                        <InputGroup type="textarea" label="Describe Version" placeholder="Describe your version" form={form} name="versionDesc"/>
                    </div> 
                    <div className="form-section wide">
                        <h2>Add Files Here</h2>
                        <div className="add-files-section">
                            <h3><FontAwesomeIcon icon={faTerminal}/>Codes</h3>
                            <div className="files-flex">
                                <FileThumb type="code" name="styles.css"/>
                                <AddNewFileThumb/>
                            </div>
                        </div>
                        <div className="add-files-section">
                            <h3><FontAwesomeIcon icon={faImage}/>Images</h3>
                            <div className="files-flex">
                                <FileThumb type="image" name="new image"/>
                                <AddNewFileThumb/>
                            </div>
                        </div>
                        <div className="add-files-section">
                            <h3><FontAwesomeIcon icon={faLink}/>Links</h3>
                            <div className="files-flex">
                                <FileThumb type="link" name="new link"/>
                                <AddNewFileThumb/>
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
                    <button>Add Version</button>
                </div>
            </div>
        </form>
    )
}
export default CreateVersion;