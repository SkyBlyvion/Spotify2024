import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Track from './Track';
import Controls from './Controls';
import PlayPause, { nextSong, prevSong } from '../../redux/Player/PlayerSlice';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
    // on récupère toutes les donnés du slice player
    const {activeSong, currentSongs, currentAlbum, currentIndex, isActive, isPlaying} = useSelector((state)=> state.player);

    //on déclare nos states
    const [shuffle, setShuffle] = useState(false); // état pour le mode aléatoire
    const [repeat, setRepeat] = useState(false); // etat pour le mode repeat
    const [volume, setVolume] = useState(0.3);

    // on récupére les hooks
    const dispatch = useDispatch();

    // on crée nos méthodes
    // méthode pour gérer l'état de play/pause
    const handlePlayPause = () => {
        // si aucune chanson active on return
        if(!isActive) return;

        // si une chanson est active
        isPlaying ? dispatchEvent(PlayPause(false)) : dispatchEvent(PlayPause(true));
    }

    // méthode pour avancer à la chanson suivante
    const handleNextSong = () => {
        //si on est pas en mode aléatoire
        if(!shuffle){
            dispatch(nextSong((currentIndex + 1) % currentSongs.length));
        }else{
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length )));
        }
    }

    // méthode pour reculer à la chanson precedente
    const handlePrevSong = () => {
        if(currentIndex === 0){
            // si l'index est a zero on recupere le dernier index du tableau
            // si j'arrive a zero, je fais longeur du tableau - 1
            dispatch(prevSong(currentSongs.length - 1));
        }else if(shuffle){
            // si on est en mode aléatoire
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length )));
        }else{
            // sinon on recule de 1
            dispatch(prevSong(currentIndex - 1));
        }
    }

  return (
    <div className='relative sm:px-12 px-8 w-full flex items-center justify-between'>
        <Track 
            isPlaying={isPlaying}
            isActive={isActive}
            currentAlbum={currentAlbum}
            activeSong={activeSong}
        />
        <div className='flex flex-1 flex-col items-center justify-center'>
            <Controls
                isPlaying={isPlaying} // savoir si le titre est en cours de lecture
                isActive={isActive} // savoir si une chanson est en cours de lecture
                currentSongs={currentSongs} // la liste des chansons
                handlePlayPause={handlePlayPause} // pour changer l'etat du play/pause
                handlePrevSong={handlePrevSong} // pour changer la chanson precedente
                handleNextSong={handleNextSong} // pour changer la chanson suivante
                repeat={repeat} // savoir si on est en mode repeat
                setRepeat={setRepeat} // pour changer le mode repeat true/false
                shuffle={shuffle} // savoir si on est en mode shuffle aléatoire
                setShuffle={setShuffle} // pour changer le mode shuffle true/false
            />
        </div>
        <VolumeBar
            value={volume} // valeur actuelle
            min={0} // valeur minimale
            max={1} // valeur maximale
            onChange={(event)=> setVolume(Number(event.target.value))} // pour recuperer la position barre de volume
            setVolume={setVolume} // pour changer le volume
        />
    </div>
  )
}

export default MusicPlayer