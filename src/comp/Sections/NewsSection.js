import React from "react";
import "./NewsSection.css";

function NewsSection() {
    return (
        <div className="newsSection">
            <div class="wrapper">
                <h2><strong>Latest Posts<span>( 4 )</span></strong></h2>

                <div class="cards">
                    <figure class="card">
                        <img src="https://www.linkpicture.com/q/1_1484.jpg" />
                        <figcaption>Dota 2</figcaption>
                    </figure>

                    <figure class="card">
                        <img src="https://www.linkpicture.com/q/2_965.jpg" />
                        <figcaption>Stick Fight</figcaption>
                    </figure>

                    <figure class="card">
                        <img src="https://www.linkpicture.com/q/3_695.jpg" />
                        <figcaption>Minion Masters</figcaption>

                    </figure>

                    <figure class="card">
                        <img src="https://www.linkpicture.com/q/4_695.jpg" />
                        <figcaption>Minion Masters</figcaption>
                    </figure>
                </div>

                <h2><strong>Featured Projects</strong></h2>

                <div class="news">

                    <figure class="article">
                        <img src="https://www.linkpicture.com/q/news1_1.jpg" />
                        <figcaption>
                            <h3>New Item</h3>
                            <p>
                                In today’s update, two heads are better than one, and three heads are better than that, as the all-new Flockheart’s Gamble Arcana item for Ogre Magi makes its grand debut.
                            </p>
                        </figcaption>
                    </figure>

                    <figure class="article">
                        <img src="https://www.linkpicture.com/q/news2.png" />
                        <figcaption>
                            <h3>Update</h3>
                            <p>
                                Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.
                            </p>
                        </figcaption>
                    </figure>
                    </div>

                    <h2><strong>Recent Gallery Updates</strong></h2>
                    <div className="recent-gallery">
                        <div className="gallerySection">
                            <img src="https://images.unsplash.com/photo-1569390173732-5c735072c80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" />
                            <img src="https://images.unsplash.com/photo-1582842195329-6a0baffd2a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <img src="https://images.unsplash.com/photo-1600722230999-22c256d38cb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            <img src="https://www.linkpicture.com/q/news2.png" alt=""/>
                            <img src="https://www.linkpicture.com/q/news2.png" alt=""/>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default NewsSection;