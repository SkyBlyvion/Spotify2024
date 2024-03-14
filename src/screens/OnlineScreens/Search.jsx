import React, { useEffect } from 'react'
import SearchBar from '../../components/SearchBar'
import SearchView from '../../components/SearchView'
import { useDispatch, useSelector } from 'react-redux'
import { selectAlbumsData } from '../../redux/album/albumSelector'
import PageLoader from '../../components/loader/PageLoader'
import { fetchResetSearch } from '../../redux/album/albumSlice'

const search = () => {

  // on récupére le const loading 
  const {loading} = useSelector(selectAlbumsData);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(fetchResetSearch([]));
    }
  }, [])
  
  return (
    <>
      <SearchBar />
      {loading ? <PageLoader /> : <SearchView />}
    </>
  )
}

export default search