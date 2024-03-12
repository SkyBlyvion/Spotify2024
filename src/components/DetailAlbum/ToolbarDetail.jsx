import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/Player/PlayerSlice';
import PageLoader from '../loader/PageLoader';
import PlayPause from '../PlayPause';
import { selectAlbumsData } from '../../redux/album/albumSelector';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
import InfoCollapse from './InfoCollapse';

const ToolbarDetail = ({dataAlbum}) => {

  // on déclare nos constantes
  const data= dataAlbum
  const songs = dataAlbum?.songs;
  // on déclare nos states
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // div plié ou déplié
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInList, setIsInList] = useState(false);

  // on récupére les hooks
  useEffect(() => {
    setIsLoading(false);
  })

  // on recupére les données des slice 
  const {isPlaying, activeSong} = useSelector(state => state.player);

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

  // méthode pour gérer le favoris
  const toggleFavorite = () => {
    setIsInList(!isInList);
    //TODO: enregistrer ou supprimer dans la bdd le favoris
  }
  
  //méthode pour ouvrir ou fermer le collapse
  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);  
  }

  return (
    isLoading ? <PageLoader /> :
    <>
      <div className='flex items-center ms-5'>
        <div className='cursor-pointer me-3 '>
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
        {/* bouton favoris */}
        <div className='cursor-pointer' onClick={() => toggleFavorite()}>
          {isInList ? 
          <AiFillHeart className='text-green m-3' style={{fontSize: '30px'}}/>
          : <AiOutlineHeart className='text-green m-3' style={{fontSize: '30px'}}/>}
        </div>
        <div className='cursor-pointer' onClick={handleCollapseClick}>
          {isCollapsed ? 
            <AiFillInfoCircle className='text-green m-3' style={{fontSize: '30px'}}/>
            : <AiOutlineInfoCircle className='text-green m-3' style={{fontSize: '30px'}}/>}
        </div>
      </div>
      {/* on récupère les infos du collapse */}
      <div>
        <Collapse isOpened={isCollapsed}>
            {/* Affichage du rendu du collapse */}
            <InfoCollapse dataAlbum={data} />
        </Collapse>
      </div>
    </>
  )
}

export default ToolbarDetail