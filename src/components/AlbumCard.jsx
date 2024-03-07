import React from 'react'
import { albumUrl } from '../constants/apiConstant'

const AlbumCard = ({data}) => {

    // constante qui récupére l'image de l'album
    const imgPath = `${albumUrl}/${data.imagePath}`

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 transition-all ease-out duration-500 animate-slideup rounded-lg cursor-pointer'>
        <div className='relative w-full h-56 flex-col'>
            <img src={imgPath} alt={data} />
        </div>
    </div>
  )
}

export default AlbumCard