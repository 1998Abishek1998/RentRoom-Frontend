/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../utils/localStorage'
import { ACCESS_TOKEN } from '../configs/constants'
import AppLayout from '../layouts/app-layout/AppLayout'

function ProtectedRoute(props: { Component: any }) {
    const { Component } = props
    const navigate = useNavigate()
    
    useEffect(() => {
        let login = getLocalStorage(ACCESS_TOKEN)
        if(!login) navigate('/login')
    },[navigate])

  return (
    <AppLayout>
      <Component/>
    </AppLayout>
  )
}

export default ProtectedRoute