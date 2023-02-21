import React from 'react';
import BlogCard from './BlogCard';
import useBlogs from '../../hooks/useBlogs';

function BlogGrid () {
    const {blogs} = useBlogs();

    return (
        <div className="Blog-grid">
            {blogs.map(blog => (
                <BlogCard blog={blog}/>
            ))}
        </div>
    );
}

export default BlogGrid;