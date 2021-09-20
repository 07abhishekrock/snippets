import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCalendarAlt as faCalendar, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../styles/singleSnippet.scss';
import { getStringDate } from '../helpers/functions'

export function AddNewSnippetThumb(){
    return (
        <Link to="/add-new" className="single-snippet-thumb center">
            <FontAwesomeIcon icon={faPlusCircle}/>
            <h1>Add New Snippet</h1>
        </Link>
    )
}

export function ViewMoreSnippetThumb(){
    return (
        <Link to="/library" className="single-snippet-thumb center">
            <h1>View More</h1>
        </Link>
    )
}

export function FallbackSnippetThumb(){
    return (
        <Link to="#" className="single-snippet-thumb fallback">
            <h3 className="fallback animate"></h3>
            <p className="fallback animate"></p>
            <div>
                <span className="fallback animate"></span>
                <div className="fallback animate"></div>
            </div>
        </Link>
    )
}

function SingleSnippetThumb({
    title,
    desc,
    dateUpdated,
    tags
}) {
    return (
        <Link to={"/snippets/" + title} className="single-snippet-thumb">
            <h3>{title}</h3> 
            <p>{desc}</p>
            <div className="snippet-bottom">
                <span><FontAwesomeIcon icon={faCalendar}/>&nbsp;{getStringDate(dateUpdated)}</span>
                <div className="snippet-tags">
                    {tags.map((tag)=>{
                        return <Link to={`#${tag}`} key={tag}>{tag}</Link>;
                    })}
                </div>
            </div>
        </Link>
    )
}

export default SingleSnippetThumb
