/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react'
import { Route, useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../utils/localStorage'
import { ACCESS_TOKEN } from '../configs/constants'

function ProtectedRoute(props: { Component: any, path: string }) {
    const { Component , path} = props
    const navigate = useNavigate()
    
    useEffect(() => {
        let login = getLocalStorage(ACCESS_TOKEN)
        if(!login) navigate('/login')
        console.log(login)
    },[navigate])

  return (<Route path={path} element={<Component/>}/> )
}

export default ProtectedRoute