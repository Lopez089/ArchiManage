import React, { useEffect } from 'react'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'

const CLIENT_ID = '679933917994-doms8a9i88vjtg54nkvr31fq08og85vk.apps.googleusercontent.com'

export const AuthGoogle = () => {
  const handleOnSuccess = res => console.log(res)
  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin
        onSuccess={() => handleOnSuccess}
        onError={() => console.log('err')}
      />
    </GoogleOAuthProvider>
  )
}
