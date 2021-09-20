import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyTextArea from './MyTextArea'
import React from 'react'

const getInputElement = (type , placeholder , form , name)=>{
    if(type === 'textarea') return <MyTextArea placeholder={placeholder} name={name} value={form.values[name]} onChange={(new_value)=>{
        form.setFieldValue(name , new_value);
    }}/>
    return <input type={type} placeholder={placeholder} {...form.getFieldProps(name)}/>
}

export function StandAloneInput({value , onChange , label , className}){
    return (
        <div className={"input-group " + className}>
            <label htmlFor={label}>{label}</label>
            <input type="text" onChange={onChange} value={value}/>
        </div>
    )
}

function InputGroup({
    placeholder,
    type,
    name,
    form,
    label
}) {
    return (
        <div className="input-group">
            <label>{label}</label>
            <div className="input">
                {getInputElement(type , placeholder , form , name)}
                {form.errors[name] ? <i className="input-error" error={form.errors[name] ? "1" : "0"} errorstring={form.errors[name]}><FontAwesomeIcon icon={faExclamationCircle}/></i> : null}
            </div>
        </div>
    )
}

export default InputGroup
