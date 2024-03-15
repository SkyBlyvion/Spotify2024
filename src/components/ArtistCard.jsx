import React from 'react'
import { albumUrl, artistUrl, imageUrl } from '../constants/apiConstant'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ArtistCard = ({dataArtist}) => {

    //on déclare notre constante d'image
    const imgPath = dataArtist?.artist?.imagePath 
    ? `${artistUrl}/${dataArtist?.artist?.imagePath}`
    : `${imageUrl}/artist.png`;
    const userId = dataArtist?.artist?.id ?? 0
    const name = dataArtist?.artist?.name ?? 'Unknown Artist'

  return (
    <Link to={`/artist-detail/${userId}`}> 
        <div className='flex flex-col justify-center items-center bg-white_01 rounded-lg shadow-lg p-4'>
            <div className='flex flex-col justify-center items-center'>
                <img className='rounded-full w-40 h-40 object-covers' src={imgPath} alt={name} />
                <h3 className='font-bold text-xl text-white text-center mt-2'>{name}</h3>
            </div>
        </div>
    </Link>
  )
}

export default ArtistCard