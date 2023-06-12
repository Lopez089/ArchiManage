import React, { useEffect } from 'react'
import { GoogleLogin } from '@react-oauth/google'

const checkIsUserLoggedIn = () => {
  const accessToken = localStorage.getItem('access_token')
  return !!accessToken // Devuelve true si hay un token de acceso, de lo contrario, devuelve false
}
const CLIENT_ID = '679933917994-8jitnb84e28j1ma5cm2su7ap89v578u3.apps.googleusercontent.com'

const handleLoginSuccess = (credentialResponse:any) => {
  // Almacenar el token de acceso en el almacenamiento local

  const token = JSON.stringify(credentialResponse)
  localStorage.setItem('access_token', token)
  console.log('Inicio de sesión exitoso')
}

const handleLoginFailure = () => {
  console.log('Error al iniciar sesión')
}

export const AuthGoogle = () => {
  if (checkIsUserLoggedIn()) {
    return <div>El usuario ya ha iniciado sesión</div>
  } else {
    return (
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      />
    )
  }
}
