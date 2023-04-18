
import './App.css';
import SearchBar from './components/SearchBar';
import ImageGallery from './components/ImageGallaery';
import { useState } from 'react';


function App() {

const [images,SetImages]=useState([]);
  return (
    <div>
      <SearchBar  SetImages={SetImages}/>
      <ImageGallery images={images}/>
      </div>

      
    
  );
}

export default App;
