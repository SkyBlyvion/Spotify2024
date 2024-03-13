import React from 'react'
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'

// je recupere tous les paramètres du slice player
const Controls = ({isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong}) => {
  return (
    <div className='flex items-center justify-around md:w-35 lg:w-52 2xl:w-80'>
        {/* on affiche le bouton repeat */}
        <BsArrowRepeat
            size={20}
            // si repeat true on lui donne la couleur rouge
            color={repeat ? 'rgba(30,215,91,1)' : '#FFF'}
            className='cursor-pointer hidden sm:block'
            onClick={()=>setRepeat((prev)=> !prev)}
        />
        {/* on affiche le bouton precedent si on a un tableau de chansons */}
        {currentSongs.length > 1 && 
            <MdSkipPrevious 
                size={30}
                color='#FFF'
                className='cursor-pointer'
                onClick={handlePrevSong}
            />
        }
        {/* on affiche le bouton play/pause avec des icones et handleplaypause true/false*/}
        {isPlaying 
            ? (
                // si vrai on affiche le bouton pause
                <BsFillPauseFill 
                    size={45}
                    color='#FFF'
                    className='cursor-pointer'
                    onClick={handlePlayPause}
                />
            ) 
            : (
                // sinon on affiche le bouton play
                <BsFillPlayFill 
                    size={45}
                    color='#FFF'
                    className='cursor-pointer'
                    onClick={handlePlayPause}
                />
            )
        }
        {/* on affiche le bouton suivant si on a un tablaeu de chansons*/}
        {currentSongs.length > 1 && 
            <MdSkipNext
                size={30}
                color='#FFF'
                className='cursor-pointer'
                onClick={handleNextSong}
            />
        }
        {/* on affiche le bouton shuffle */}
        <BsShuffle
            size={20}
            // si repeat true on lui donne la couleur rouge
            color={shuffle ? 'rgba(30,215,91,1)' : '#FFF'}
            className='cursor-pointer hidden sm:block'
            onClick={()=>setShuffle((prev)=> !prev)}
        />

    </div>
  )
}

export default Controls