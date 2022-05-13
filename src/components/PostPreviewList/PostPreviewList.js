import React from 'react'
import PostPreview from '../PostPreview/PostPreview'

export default function PostPreviewList(props) {
    
    const postPreviewItems = props.posts.map((post)=> <PostPreview key={post.id} post={post}/>)

    return (
        <>
            {postPreviewItems}
        </>
    )
}
