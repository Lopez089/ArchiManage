import React from 'react'

interface IMessage{
  typeMessage: 'error' | 'success' | 'warning'
  message: string
}

export const Message = ({ typeMessage, message }:IMessage) => {
  return (
    <p className={typeMessage}>{message}</p>
  )
}
