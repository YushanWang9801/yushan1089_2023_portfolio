import React from 'react';
import Footer from './Footer';
import HeaderWang from './HeaderWang';
import BlogTitle from './Blog/BlogTitle';
import BlogGrid from './Blog/BlogGrid';

function Blog () {
    return (
        <div className="Blog">
            <HeaderWang />
            <BlogGrid />
            <Footer />
        </div>
    );
}

export default Blog;