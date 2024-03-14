import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { playPause, setActiveAlbum, setActiveSong } from '../../redux/Player/PlayerSlice';
import PageLoader from '../loader/PageLoader';
import PlayPause from '../PlayPause';
import { selectAlbumsData } from '../../redux/album/albumSelector';
import { AiFillHeart, AiFillInfoCircle, AiOutlineHeart, AiOutlineInfoCircle } from 'react-icons/ai';
import { Collapse } from 'react-collapse';
import InfoCollapse from './InfoCollapse';
import { USER_INFOS } from '../../constants/appConstant';
import { fetchUserFavorite } from '../../redux/user/userSlice';
import { selectUserData } from '../../redux/user/userSelector';
import { fetchAddRemoveFavorite } from '../../services/userFavoritesService';

const ToolbarDetail = ({dataAlbum}) => {

  // on déclare nos constantes
  const data= dataAlbum
  const songs = dataAlbum?.songs;
  // on récupère l'id de l'album
  const albumId = dataAlbum?.id;
  // on récupère l'id de l'user en session
  const userId = localStorage.getItem(USER_INFOS) ? JSON.parse(localStorage.getItem(USER_INFOS)).userId : null;
  // on déclare nos states
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // div plié ou déplié
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isInList, setIsInList] = useState(false);
  const [listArray, setListArray] = useState([]);
  
  // on récupére les hooks
  const dispatch = useDispatch();

  // on recupére les données des slice 
  const {isPlaying, activeSong} = useSelector(state => state.player);
  const { loading, userFavorite} = useSelector(selectUserData);
  useEffect(() => {
    dispatch(fetchUserFavorite(userId));
    checkFavorites();
    setIsLoading(false);
  }, [])

  // check si l'album est dans la liste de favoris
  const checkFavorites = () => {
    if (userFavorite) {
      const idArray = userFavorite.map((item)=>`/api/alba/${item.id}`);
      setListArray([...new Set(idArray)])

      if(idArray.includes(`/api/alba/${albumId}`)) setIsInList(true);
    }
  }


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
  const toggleFavorite = async () => {
    setIsInList(!isInList);
    // créer une copie de list Array
    let updatedListArray = [...listArray];

    if(isInList){
      // supprimer l'id de l'album dans le tableau
      updatedListArray = listArray.filter((item) => item !== `/api/alba/${albumId}`);
    }else{
      // on ajoute l'id de l'album dans le tableau
      updatedListArray.push(`/api/alba/${albumId}`);
    }

    // on appel le service pour mettre a jour la lsite des favoris dans la bdd
    await fetchAddRemoveFavorite(updatedListArray, userId);

    // on mets a jour le state
    setListArray(updatedListArray);
  }
  
  //méthode pour ouvrir ou fermer le collapse
  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);  
  }

  return (
    isLoading ? <PageLoader /> :
    <>
      <div className='flex items-center ml-5'>
        <div className='cursor-pointer mr-3 '>
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