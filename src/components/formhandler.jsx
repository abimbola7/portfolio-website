"use client"
import React from 'react'

export default function FormHandler() {
  const [ name, setName ] = React.useState("")
  const [ email, setEmail ] = React.useState("")
  const [ content, setContent ] = React.useState("")
  
  const submitHandler = async (e) => {
    e.preventDefault()
    console.log(name, email, content) 
    const res = await fetch("/api/send", {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({name, email, content})
    });
    const json = await res.json();
    console.log(json)
  }
  return (
    <form
    onSubmit={submitHandler}
    className="text-left mt-10 mx-auto max-w-4xl"
    >
      <div className='grid grid-cols-2 gap-3 justify-items-start'>
        <div className=''>
          <label>Your Name</label>
          <input
          value={name}
          onChange={(e)=>setName(e.target.value)}
          className='border-b placeholder:text-xs py-2 placeholder:font-thin bg-transparent focus:outline-none block'
          placeholder='Enter your name'
          />
        </div>
        <div className=''>
          <label>Your Email Address</label>
          <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type='email'
          className='border-b placeholder:text-xs py-2 placeholder:font-thin bg-transparent focus:outline-none block'
          placeholder='Enter your email address'
          />
        </div>
        <div className='col-span-2 flex flex-col w-full'>
          <label>Your Message</label>
          <input
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          className='border-b placeholder:text-xs py-2 placeholder:font-thin bg-transparent focus:outline-none block flex-1'
          placeholder='Hey i would like to work with you'
          />
        </div>
      </div>
      <div className='text-center mt-4'>
        <button
        className=''
        >Send Message</button>
      </div>
    </form>
  )
}
