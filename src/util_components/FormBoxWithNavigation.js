import React from 'react'

function FormBoxWithNavigation({children , nav_options , position , setPosition}) {
    return (
        <div className="form-box-with-navigation">
            <div className="form-nav">
                {nav_options.map((option , index)=>{
                    if(index === position){
                        return <>
                            <div className="nav-option" select="1">
                                <button>{option.label}</button>
                                <i className="option-title">{option.title}</i> 
                            </div>
                            <i className="option-rule" select="1"></i>
                        </>
                    }
                    return <>
                        <div className="nav-option" onClick={(e)=>{e.preventDefault();setPosition(index)}}>
                            <button>{option.label}</button>
                        </div>
                        <i className="option-rule"></i>
                    </>
                })}
            </div>
            <div className="form-container">
                {children}
            </div>
        </div>
    )
}

export default FormBoxWithNavigation
