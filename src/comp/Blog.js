import React from 'react';
import Footer from './Footer';
import HeaderWang from './HeaderWang';
import BlogCover from './Blog/BlogCover';
import BlogGrid from './Blog/BlogGrid';

function Blog () {
    return (
        <div className="Blog">
            <HeaderWang />
            <BlogCover />
            <BlogGrid />
            <Footer />
        </div>
    );
}

export default Blog;