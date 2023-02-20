import React from 'react';
import {useState} from 'react';

import Modal from './Galllery/Modal';
import GalleryTitle from './Galllery/GalleryTitle';
import ImageGrid from './Galllery/ImageGrid';
import HeaderWang from './HeaderWang';
import Footer from './Footer';

function Gallery(){
    const [selectedImg, setSelectedImg] = useState(null); 
  
    return (
      <div className="Gallery">
        <HeaderWang />
        <GalleryTitle />
        {/* <UploadForm /> */}
        <ImageGrid setSelectedImg={setSelectedImg}/>
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
        <Footer />
    </div>
    );
  }

export default Gallery;