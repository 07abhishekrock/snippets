import React, { useEffect , useRef } from 'react'

function MyTextArea({
    placeholder,
    name,
    value,
    onChange
}) {
    const textarea_ref = useRef(null);
    useEffect(()=>{
        textarea_ref.current.innerText = value;
    },[value])
    return (
        <span className="content-editable-div" contentEditable placeholder={placeholder} name={name} role="textbox" ref={textarea_ref} onBlur={()=>onChange(textarea_ref.current.innerText)}></span>
    )
}

export default MyTextArea
