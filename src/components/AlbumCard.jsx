import React from 'react'
import { albumUrl } from '../constants/apiConstant'
import { Link } from 'react-router-dom'


const AlbumCard = ({data}) => {

    // constante qui récupére l'image de l'album
    const imgPath = `${albumUrl}/${data.imagePath}`

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 transition-all ease-out duration-500 animate-slideup rounded-lg cursor-pointer'>
        <div className='relative w-full flex-col'>
            <Link to={`/details/${data?.id}`}>
                <img className='card-sh rounded-lg object-cover' src={imgPath} alt={data?.title} />
            </Link>
            <div className='mt-4 flex flex-col'>
                <p className='text-white text-xl truncate font-bold'>{data?.title}</p>
                <p className='text-sm truncate text-white'>{data?.artist?.name}</p>
            </div>
        </div>
    </div>
  )
}

export default AlbumCard