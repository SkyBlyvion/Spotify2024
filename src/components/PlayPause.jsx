import React from 'react'
import { BsPauseCircleFill, BsPlayCircleFill } from 'react-icons/bs';

const PlayPause = ({
    size = '60px', // taille du composant par defaut 60px
    isPlaying, //gère l'état si on est en lecture ou en pause
    songs, // tableau des chansons
    activeSong, // chanson en cours de lecture
    handlePause, // fonction pour mettre en pause
    handlePlay, // fonction pour mettre en lecture
    index // index de la chanson dans le tableau de chansons
}) => {
  return (
    // on check si on est en mode play && si le titre en cours de lecture est == au titre de la chanson actuelle ( du tableau à l'index donné )
    isPlaying && activeSong ?.title === songs [index].title ?
    // si vrai on affiche le bouton pause avec handlePause
    <BsPauseCircleFill 
        size= {size}
        className='text-green_top shadow-md'
        onClick={handlePause}
    />
    :
    // si faux on affiche le bouton play avec handlePlay
    <BsPlayCircleFill 
        size= {size}
        className='text-green_top shadow-md'
        onClick={handlePlay}
    />
  )
}

export default PlayPause