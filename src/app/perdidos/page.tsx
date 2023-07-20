'use client';
import { LazyLoading } from '@/components/LazyLoading/LazyLoading'
import { useState } from 'react'
import type { MouseEventHandler, } from 'react'



const random = () => Math.floor(Math.floor(Math.random() * 123) + 1)
const generateId = () => Math.random().toString(36).substr(2, 8);


type ImageItems = { id: string; url:string}

function Perdidos() {
  const [images, setImages] = useState < Array<ImageItems>>([])

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newImageItem : ImageItems= {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };
    setImages([
      ...images,
      newImageItem
    ])
}


  return (
    <div>
      <button onClick={addNewFox} >Agregar Zorro</button>
      {images.map(({id, url}) => (
        <div key={id}>
          <LazyLoading
            src={url}
            onClick={()=>console.log("hola"+ id)}/>
      </div>
      ))}
      
    </div>
  )
}

export default Perdidos