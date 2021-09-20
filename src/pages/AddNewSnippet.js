import React , {useState} from 'react'
import * as yup from 'yup';
import InputGroup, { StandAloneInput } from '../util_components/InputGroup'
import { useFormik } from 'formik';
import FormBoxWithNavigation from '../util_components/FormBoxWithNavigation';
import FlexibleSearchCombo from '../util_components/FlexibleSearchCombo';
import CreateVersion from '../util_components/CreateVersion';
const form_nav_options = [
    {
        label : '1',
        title : 'Describe Your Snippet',
    },
    {
        label : '2',
        title : 'Add Version Information',
    },
    {
        label : '3',
        title : 'Hashtag Your Snippet'
    }
]

const renderFormBasedOnIndex = (index , form)=>{
    if(index === 0){
        return <div className="normal form">
            <InputGroup type="text" label="Title" placeholder="Enter Title Here" form={form} name="title"/>
            <InputGroup type="textarea" label="Description" placeholder="Describe Your Snippet Here" form={form} name="description"/>
            <div className="form-button-group">
                <button>Move Forward</button>
            </div>
        </div>
    }
    else if(index === 1){
        return <CreateVersion resetBtnText={"Reset"} resetCallback={()=>console.log('go back now')}/>;
    }
    return <div className="normal form">
        <FlexibleSearchCombo
        selectedItems = {form.values.tags}
        setSelectedItems = {form.setFieldValue.bind(null , 'tags')}
        getSearchData={(keyword)=>{
            return [
                {id : 100 , name : 'First Item'},
                {id : 101 , name : 'Second Item'},
                {id : 102 , name : 'Third Item'},
                {id : 103 , name : 'Fourth Item'},
            ]
        }} 
        search_bar_input={(value , onChange)=><StandAloneInput value={value} className={"stand-alone"} onChange={(e)=>{
            onChange(e.target.value);
        }} label={"Enter Keyword"}/>} 
        search_results_container={(search_results , selected_items ,  set_selected_items , loading)=>{
            return <div className="flex-results">
                {search_results.map((search_result)=>{
                    return (
                        <span key={search_result.id} onClick={()=>{
                            const new_selected_items = selected_items.filter((selected_item)=>{
                                return selected_item.id !== search_result.id;
                            })
                            if(new_selected_items.length === selected_items.length){
                                new_selected_items.push(search_result);
                            }
                            set_selected_items(new_selected_items)
                        }}>{search_result.name}</span>
                    )
                })}
            </div>
        }}
        selected_results_container={(selected_items , set_selected_items)=>{
            return (
                <div className="flex-selected-wrapper">
                    <h3>Added Tags</h3>
                    <div className="flex-selected-items">
                        {selected_items.map((selected_item)=>{
                            return <span className="scale-fade-in" key={selected_item.id} onClick={()=>{
                                    set_selected_items(selected_items.filter((item)=>{
                                        return selected_item.id !== item.id;
                                    }))
                                }}>
                                <i>#</i>{selected_item.name}&nbsp;,
                            </span>
                        })}
                    </div>
                </div>
            )
        }} 
        />
        <div className="form-button-group">
            <button>Go Back</button>     
            <button>Submit</button>
        </div>  
    </div>
}

function AddNewSnippet() {
    const [currentSelected , setCurrentSelected] = useState(0);
    const add_new_snippet_form = useFormik({
        initialValues : {
            title : '',
            description : '',
            versionCode : '',
            versionDesc : '',
            codeItems : [],
            imageItems : [],
            linkItems : [],
            tags : []
        },
        validationSchema : yup.object({
            title : yup.string().required()
        })
    });
    return (
        <form className="add-new-snippet-page">
            <h1>Add A <i>New</i> Snippet</h1> 
            <FormBoxWithNavigation nav_options={form_nav_options} position={currentSelected} setPosition={setCurrentSelected}>
                {renderFormBasedOnIndex(currentSelected , add_new_snippet_form)}
            </FormBoxWithNavigation>
        </form>
    )
}

export default AddNewSnippet
