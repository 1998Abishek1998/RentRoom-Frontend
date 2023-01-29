import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import PageNotFound from '../components/Error/PageNotFound'

const OutRoute = () => {
  return (
      <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
  )
}

export default OutRoute