import React from 'react'
import { albumUrl } from '../constants/apiConstant'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { playPause, setActiveAlbum, setActiveSong } from '../redux/Player/PlayerSlice'
import PlayPause from './PlayPause'


const AlbumCard = ({data, index, songs, isPlaying, activeSong}) => {

    // constante qui récupére l'image de l'album
    const imgPath = `${albumUrl}/${data.imagePath}`
    // on recupere le hook dispatch
    const dispatch = useDispatch();

    // on redefinit les constantes pour les donner aux albums
    const artistName = data?.artist?.name ?? 'Artiste inconnu'
    const albumName = data?.title ?? 'Album inconnu'
    const albumId = data?.id ?? 0

    // on va definir la methode pause
    const handlePauseClick = () => {
        dispatch(playPause(false))
    } 

    // méthode pour lancer la lecture
    const handlePlayClick = () => {
        dispatch(setActiveSong({songs, data, index}));
        dispatch(setActiveAlbum({data}));
        dispatch(playPause(true));
    }

  return (
    <div className='flex flex-col w-[250px] p-4 bg-white_01 hover:bg-white_05 transition-all ease-out duration-500 animate-slideup rounded-lg cursor-pointer group'>
        <div className='relative w-full flex-col'>
            <Link to={`/details/${albumId}`}>
                <img className='card-sh rounded-lg object-cover' src={imgPath} alt={albumName} />
            </Link>
            {/* on place notre composant playpause ici */}
            <div className={`absolute ${activeSong?.title === songs[index].title ? 'flex' : 'hidden'} group-hover:flex right-3 bottom-5`}>
                <div className='group-hover:animate-slideup1 bg-black outline-none rounded-full group-hover:duration-75 overflow-hidden'>
                    <PlayPause
                        songs={songs}
                        handlePause={handlePauseClick}
                        handlePlay={()=>handlePlayClick(index)}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        index={index}
                        data={data}
                    />
                </div>

            </div>
            <Link to={`/details/${albumId}`}>
                <div className='mt-4 flex flex-col'>
                    <p className='text-white text-xl truncate font-bold'>{albumName}</p>
                    <p className='text-sm truncate text-white'>{artistName}</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default AlbumCard