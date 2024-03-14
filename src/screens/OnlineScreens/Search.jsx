import React from 'react'
import SearchBar from '../../components/SearchBar'
import SearchView from '../../components/SearchView'
import { useSelector } from 'react-redux'
import { selectAlbumsData } from '../../redux/album/albumSelector'
import PageLoader from '../../components/loader/PageLoader'

const search = () => {

  // on récupére le const loading 
  const {loading} = useSelector(selectAlbumsData);

  return (
    <>
      <SearchBar />
      {loading ? <PageLoader /> : <SearchView />}
    </>
  )
}

export default search