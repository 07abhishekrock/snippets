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

const renderFormBasedOnIndex = (index , form , goBack , goNext)=>{
    if(index === 0){
        return <div className="normal form">
                    <InputGroup type="text" label="Title" placeholder="Enter Title Here" form={form} name="title"/>
                    <InputGroup type="textarea" label="Description" placeholder="Describe Your Snippet Here" form={form} name="description"/>
                    <div className="form-button-group">
                        <button onClick={goNext}>Move Forward</button>
                    </div>
            </div>
    }
    else if(index === 1){
        return <CreateVersion resetBtnText={"Go Back"} resetCallback={goBack} version_form={form} submitCallback={goNext}/>;
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
            <button onClick={goBack}>Go Back</button>     
            <button onClick={goNext}>Submit</button>
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
            codes : [
                {
                    lang : 'Javascript',
                    data : <>
                    <code>let a = 100;</code>
                    <code>helloworld();</code>
                    <code>//function is called here. </code>
                    </>,
                    id : '1234',
                    name : 'index.js',
                }
            ],
            images : [
                {
                    url : 'https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
                    name : 'Random Sign',
                    id : '1235'
                }
            ],
            links : [
                {
                    url : 'https://www.google.com',
                    name : 'Google Page',
                    id : '1236'
                }
            ],
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
                {renderFormBasedOnIndex(currentSelected , add_new_snippet_form , ()=>{
                    setCurrentSelected(currentSelected - 1); 
                }, ()=>{
                    setCurrentSelected(currentSelected + 1)
                })}
            </FormBoxWithNavigation>
        </form>
    )
}

export default AddNewSnippet
