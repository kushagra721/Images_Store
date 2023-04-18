import React from 'react'
import Imgaeview from './Imgaeview'

const ImageGallaery = ({images}) => {
  return (
      <div className='image-gallery'>
            {
            
                  images.map((value,key)=>
                        <Imgaeview key={key} photo={value}/>
                        

               )
            }
            
      </div>
    
  )
}

export default ImageGallaery