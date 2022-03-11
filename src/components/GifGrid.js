import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifsGridItem } from './GifsGridItem';


export const GifGrid = ({category}) => {
  

  const { data : images , loading} = useFetchGifs( category);


  return (
  <>
      <h3 className='animate__animated animate__fadeInLeft'>{category}</h3>
      <div className="card-grid">
        {loading && <p className='animate__animated animate__flip'>loading</p>}
        
         { 
            images.map(img=>(
              <GifsGridItem
              key={img.id}
              { ...img }
              />
              ))
            }
        
       </div>
  </>
  )
}
