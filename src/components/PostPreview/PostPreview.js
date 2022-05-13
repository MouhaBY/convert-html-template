import React from 'react'
import { NavLink as RouterLink } from "react-router-dom";

export default function PostPreview(props) {
  return (
    <>
        <div className="post-preview">
            <RouterLink to={`/posts/${props.post.id}`}>
                <h2 className="post-title">{props.post.title}</h2>
                <h3 className="post-subtitle">{props.post.subtitle}</h3>
            </RouterLink>
            <p className="post-meta">
                Posted by
                <RouterLink to="/"> {props.post.author} </RouterLink>
                on {props.post.publication_date}
            </p>
        </div>
        <hr className="my-4" />
        </>
        
  )
}
