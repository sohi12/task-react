import React from 'react'

export default function Contact() {
  return (
<>

<h1 className='contact text-center py-5'>CONATCT SECTION</h1>

<input className='form-control w-50 m-auto' type="text" placeholder='userName' />
<input className='form-control w-50 m-auto' type="text" placeholder='userAge' />
<input className='form-control w-50 m-auto' type="text" placeholder='userEmail' />
<input className='form-control w-50 m-auto' type="text" placeholder='userPassword' />
<button className='btn1'>Send Messages</button>

</>
  )
}