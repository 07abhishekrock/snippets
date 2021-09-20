import React from 'react'

function SnippetGridWrapper({
    title,
    children
}) {
    return (
        <div className="snippet-grid-wrapper">
            <h2>{title}</h2> 
            <div className="snippet-grid">
                {children}
            </div>
        </div>
    )
}

export default SnippetGridWrapper
