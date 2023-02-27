import React from 'react';
import "./SingleBlog.css";

import blogsData from "./blogs-data.json";

function SingleBlog () {

    return (
        <div className="SingleBlog">
            <BlogTitle blog={blogsData[0]} />
            <BlogContent content={blogsData[0].content}/>    
        </div>
    );
}

function BlogTitle ({blog}) {
    return (
        <div className='BlogTitle'>
            <h1>{blog.title}</h1>
            <img src={`${blog.coverImage}`} alt="coverImage" />
            <div className='BlogSubtitle'>
                <h2>{blog.subtitle}</h2>
            </div>
        </div>
    );
}

function BlogContent ({content}) {
    return (
        <div className="BlogContent">
            {content.map(data => (
                <div className="blog-paragraph">{data.content}</div>
            ))}
        </div>
    );
}

export default SingleBlog;