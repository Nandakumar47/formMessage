import React from 'react'
import "./MessageCard.css"

function MessageCard({name,mobile,mail,subject,message}) {
  return (
    <div className='messageCard__main'>
        <p><span>Name:</span>{name}</p>
        <p><span>Phone Number:</span>{mobile}</p>
        <p><span>Mail-ID :</span>{mail}</p>
        <p><span>Subject :</span>{subject}</p>
        <p><span>Message :</span>{message}</p>
    </div>
  )
}

export default MessageCard