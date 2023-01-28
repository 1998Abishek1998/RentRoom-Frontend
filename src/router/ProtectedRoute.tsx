/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../utils/localStorage'

function ProtectedRoute(props: { Component: any }) {
    const { Component } = props
    const navigate = useNavigate()
    
    useEffect(() => {
        let login = getLocalStorage('token')
        if(!login) navigate('/login')
    },[navigate])

  return (
    <>
    <Component/>
    </>
  )
}

export default ProtectedRoute