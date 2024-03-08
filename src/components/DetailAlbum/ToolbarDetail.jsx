import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/Player/PlayerSlice';
import PageLoader from '../loader/PageLoader';
import PlayPause from '../PlayPause';

const ToolbarDetail = ({dataAlbum}) => {

  const songs = dataAlbum?.songs;
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  // on recupére les données du slice 
  const {isPlaying, activeSong} = useSelector(state => state.player)
  const {loading} = useSelector(state => state.albums)

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
    loading ? <PageLoader /> :
    <div className='cursor-pointer mr-3 '>
      <PlayPause
        songs={songs}
        handlePause={handlePauseClick}
        handlePlay={()=>handlePlayClick(index)}
        isPlaying={isPlaying}
        activeSong={activeSong}
        index={index}
        data={dataAlbum}
      />
    </div>
  )
}

export default ToolbarDetail