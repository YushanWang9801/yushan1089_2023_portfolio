import Footer from './comp/Footer';
import GalleryTitle from './comp/GalleryTitle';

//import UploadForm from './comp/UploadForm';
import ImageGrid from './comp/ImageGrid';
import Modal from './comp/Modal';

import HeaderWang  from './comp/HeaderWang';
import Contact from './comp/Contact';

import {useState} from 'react';


function App() {
  
  return (
    <div className="App">
      <HeaderWang />
      <GalleryTitle />
      {/* <Gallery />  */}
      <Contact />
      <Footer />
    </div>
  );
}


function Gallery(){
  const [selectedImg, setSelectedImg] = useState(null); 

  return (
    <div className="Gallery">
      {/* <UploadForm /> */}
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
  </div>
  );
}

export default App;
