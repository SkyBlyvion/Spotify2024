import React from 'react'
import { albumUrl, artistUrl, imageUrl } from '../constants/apiConstant'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ArtistCard = ({dataArtist}) => {

    //on déclare notre constante d'image
    const imgPath = dataArtist?.artist?.imagePath 
    ? `${artistUrl}/${dataArtist?.artist?.imagePath}`
    : `${imageUrl}/artist.png`;

  return (
    <Link to='#'> 
        <div className='flex flex-col justify-center items-center bg-white_01 rounded-lg shadow-lg p-4'>
            <div className='flex flex-col justify-center items-center'>
                <img className='rounded-full w-40 h-40 object-covers' src={imgPath} alt={dataArtist?.artist?.name} />
                <h3 className='font-bold text-xl text-white text-center mt-2'>{dataArtist?.artist?.name}</h3>
            </div>
        </div>
    </Link>
  )
}

export default ArtistCard