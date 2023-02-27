import React from 'react';
import "./SingleArticle.css";

import useFirestore from '../../hooks/useFirestore';
import {motion} from 'framer-motion';
import {useState} from "react";

function SingleArticle({blog}) {

    const [category, setCategory] = useState("love-letter");

    const {docs} = useFirestore('project-images', category);

    var articles = [];
    for (var i = 1; i < blog.content.length ; i++) {
        if(i < docs.length) {
            articles.push(
                    <motion.img 
                    src={docs[i].url} alt="love-letter-montage"
                    initial={{opacity: 0}} animate={{opacity: 1}}
                    transition={{delay:1}}/>);
        }
        articles.push(
            <div class="multicol">
                <p>{blog.content[i]["content"]}</p>
            </div>  );
    }

    return (
        <div className="SingleArticle"> 
            <main>
                <article>
                        <header>
                            <img src={`${blog.coverImage}`} alt="" />
                        </header>
                    <div class="multicol">
                        <h1>{blog.name}</h1>
                        <h2>{blog.title}</h2>
                        <p>{blog.content[0]["content"]}</p>
                    </div>
                    {articles}
                    <div class="multicol">
                        <p class="credits">
                            Text by <a href="me">Yushan Wang</a>
                            <br/>
                            Written in <a>{blog.date}</a>
                        </p>
                    </div>

                    {/* { docs && docs.slice(1, docs.length).map(doc => (
                        <motion.img src={doc.url} alt="uploaded pic"
                        initial={{opacity: 0}} animate={{opacity: 1}}
                        transition={{delay:1}}
                        /> ))
                    } */}
                </article>
            </main>
        </div>
    );
}

export default SingleArticle;