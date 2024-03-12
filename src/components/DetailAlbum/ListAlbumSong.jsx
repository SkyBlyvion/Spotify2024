import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/Player/PlayerSlice';
import { BiTime } from 'react-icons/bi';
import { tableIcon } from '../../constants/appConstant';
import PlayPause from '../PlayPause';

const ListAlbumSong = ({dataAlbum}) => {
    // on déclare nos constantes
    const data = dataAlbum; // infos de l'album
    const songs = dataAlbum?.songs; // infos des titres
    // on déclare nos states
    const [isHover, setIsHover] = useState(-1); // quand la souris sera sur une piste du tableau
    // on récupère les donées du store
    const {isPlaying, activeSong} = useSelector(state => state.player);
    // on récupére les hooks
    const dispatch = useDispatch();

    // méthode pour mettre en pause
    const handlePauseClick = () => {
        dispatch(playPause(false))
    }

    // méthode pour lancer la lecture
    const handlePlayClick = (index) => {
        dispatch(setActiveSong({songs, data, index}));
        dispatch(setActiveAlbum({data}));
        dispatch(playPause(true));
    }

  return (
    <div className='flex flex-col'>
        <div className='overflow-x-auto min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
                <div className='overflox-hidden'>
                    <table className='min-w-full text-left text-sm font-light'>
                        <thead className='border-b font-medium'>
                            <tr>
                                <th scope='col' className='px-6 py-4'>#</th>
                                <th scope='col' className='px-6 py-4'>TITRE</th>
                                <th scope='col' className='px-6 py-4'><BiTime style={tableIcon}/></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                songs 
                                ? songs.map((row, index) => {
                                    //formatage du temps pour les titres
                                    const minutes = Math.floor(row.duration / 60);
                                    const seconds = Math.floor(row.duration % 60); // modulo
                                    // on formate el temps en mm:ss
                                    const duration = seconds < 10
                                    ? `${minutes}:0${seconds}`
                                    : `${minutes}:${seconds}`

                                    return (
                                        <tr 
                                            key={index} 
                                            className='border-b transition duration-300 ease-in-out hover:bg-gradient-to-b from-green_top to-transparent'
                                            onMouseEnter={() => setIsHover(index)} 
                                            onMouseLeave={() => setIsHover(-1)} 
                                            >
                                            <td className='whitespace-nowrap px-6 py-4 font-medium m-1'>
                                                {/* on va use isHover pour afficher le bouton de lecture */}
                                                {isHover !== index && `#${index + 1}`}
                                                {isHover === index && <PlayPause 
                                                    size='16px'
                                                    songs={songs}
                                                    handlePause={handlePauseClick}
                                                    handlePlay={() => handlePlayClick(index)}
                                                    isPlaying={isPlaying}
                                                    activeSong={activeSong}
                                                    index={index}
                                                />}
                                            </td>
                                            <td className='whitespace-nowrap px-6 py-4 font-medium m-1'>
                                                {row.title}
                                            </td>
                                            <td className='whitespace-nowrap px-6 py-4 font-medium m-1'>
                                                {duration}
                                            </td>
                                        </tr>
                                    )
                                }) 
                                : (
                                    <tr>
                                        <td colSpan="3">
                                            Aucunne chanson disponible
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListAlbumSong