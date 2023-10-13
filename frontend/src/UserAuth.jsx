import React, { useState } from 'react'
import UseAppContext from './AppContext'
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom'

const UserAuth = ({children}) => {
   // const [currentUser, setCurrentUser] = useState(second)
   const [currentUser, setCurrentUser] = useState(
      JSON.parse(sessionStorage.getItem('user'))
   )
   //  const {currentUser } = UseAppContext()
 if(currentUser !== null){
    return children
 }
 else{
    Swal.fire({
        icon: 'error',
        title: 'permission',
        text: 'you need to login First'
    })
    return <Navigate to ="/login"></Navigate>
 }
}

export default UserAuth