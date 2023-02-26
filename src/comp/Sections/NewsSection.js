import React from "react";
import "./NewsSection.css";

import blogs from "./../Blog/blogs-data.json";
import projects from "./../Projects/projects.json";
import useFirestore from '../../hooks/useFirestore';

const news = blogs.slice(1, 3);
const cards = projects.slice(0, 3);

const NewsSection = () => {

    const {docs} = useFirestore('images', "All");
    const shuffled = docs.sort(() => 0.5 - Math.random());
    const images = shuffled.slice(0,5);

    return (
        <div className="newsSection">
            <div class="wrapper">
                <h2><strong>Latest Posts</strong></h2>

                <div class="news">
                    {
                        news.map(blog  => (
                            <figure class="article">
                                <img src={blog.coverImage} />
                                <figcaption>
                                    <h3>{blog.name}</h3>
                                    <p>{blog.short_desc.split('.')[0]}</p>
                                </figcaption>
                            </figure>
                        ))
                    }
                </div>
                <h2><strong>Featured Projects<span>( 3 )</span></strong></h2>
                    <div class="cards">
                        {   
                            cards.map(card => (
                        <figure class="card">
                            <img src={card.coverImage} />
                            <figcaption>{card.name}</figcaption>
                        </figure>
                            ))
                        }
                    </div>

                <h2><strong>Recent Gallery Updates</strong></h2>
                <div className="recent-gallery">
                    <div className="gallerySection">
                        {
                            images.map(image => 
                                <img src={image.url} alt="images" />)  
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsSection;