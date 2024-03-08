import React from 'react'
import HeaderDetail from './HeaderDetail'
import HeaderToolbar from './ToolbarDetail'
import ToolbarDetail from './ToolbarDetail'

const DetailAlbum = ({dataAlbum}) => {
  return (
    <>
        <HeaderDetail dataAlbum={dataAlbum}/>
        <ToolbarDetail dataAlbum={dataAlbum}/>
    </>
  )
}

export default DetailAlbum