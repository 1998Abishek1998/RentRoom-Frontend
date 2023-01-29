import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../components/Error/PageNotFound'
import ProtectedRoute from './ProtectedRoute'
import Home from '../pages/Home/Home'

const Approutes = () => {
  return (
    <Routes>
        <ProtectedRoute path='/home'  Component={Home}/>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

export default Approutes