import React from 'react'
import { albumUrl } from '../../constants/apiConstant'
import { useSelector } from 'react-redux';
import { selectArtistsData } from '../../redux/artist/artistSelector';

const Track = ({isPlaying, isActive, activeSong, currentAlbum, artist='artiste inconnu'}) => {
    
    // on recupere depuis note selector artist
    const { artistsDetails } = useSelector(selectArtistsData)
    
    // on recupére l'image de l'album
    const imgPath = `${albumUrl}/${currentAlbum?.imagePath}`;
    const title = activeSong?.title ?? `Musique sans titre`;
    const artistName = currentAlbum?.artist?.name ?  currentAlbum?.artist?.name : artistsDetails?.name ? artistsDetails.name : artist;
    const album = currentAlbum?.title ?? `Album inconnu`;


  return (
    <div className='flex flex-1 items-center justify-start'>
        {/* On affiche l'image de l'album */}
        {/* si isplaying et isactive true , spin */}
        <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
            <img src={imgPath} alt={`image album ${album}`} className='rounded-full' />
        </div>
        <div className='w-[50%]'>
            <p className='truncate text-white font-bold text-lg'>
                {title}
            </p>
            <p className='truncate text-gray-500'>
                {artistName} - {album}
            </p>
        </div>
    </div>
  )
}

export default Track