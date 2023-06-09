import React, { useEffect } from 'react'

const CLIENT_ID = '679933917994-8pc5c844d1r5ed8711fc5r9d3j49l6gk.apps.googleusercontent.com'

export const AuthGoogle = () => {
  const handleGoogleLoginSuccess = (response: any) => {
    console.log('Inicio de sesión exitoso:', response)
    // Aquí puedes realizar acciones adicionales después del inicio de sesión exitoso con Google.
  }

  const handleGoogleLoginFailure = (error: any) => {
    console.log('Error en el inicio de sesión de Google:', error)
  }

  const handleGoogleLogin = () => {
    const redirectUri = `${window.location.origin}/oauth2callback`
    const scope = 'https://www.googleapis.com/auth/drive'

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=token&scope=${encodeURIComponent(scope)}`

    window.location.href = authUrl
  }
  useEffect(() => {
    // Verificar si se ha redirigido desde la página de autorización de Google
    if (window.location.hash) {
      const params = new URLSearchParams(window.location.hash.substr(1))
      const accessToken = params.get('access_token')

      if (accessToken) {
        // Si se obtiene un access token, el inicio de sesión fue exitoso
        handleGoogleLoginSuccess({ access_token: accessToken })
      } else {
        // Si no se obtiene un access token, el inicio de sesión ha fallado
        handleGoogleLoginFailure(params.get('error'))
      }
    }
  }, [])

  return (
    <div>
      <h1>Implementación de la autenticación con Google</h1>
      <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
    </div>
  )
}
