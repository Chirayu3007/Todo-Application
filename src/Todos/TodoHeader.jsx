import React, { useEffect, useState } from 'react'

const TodoHeader = () => {


  const [dateTime, setDateTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const formattedDate = now.toLocaleDateString()
      const formattedTime = now.toLocaleTimeString()
      setDateTime(`${formattedDate} - ${formattedTime}`)
    }, 1000);

    return () => clearInterval(interval)
  }, [])



  return (
    <>
      <h1>Todo List</h1>
      <h2 className='date-time'>{dateTime}</h2>
    </>
  )
}

export default TodoHeader
