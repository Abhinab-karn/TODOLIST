"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])

    console.log(mainTask)

    settitle("")
    setdesc("")


  }
  const deletHandeler = (i) =>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }


let renderTask = <h2>No Task Added</h2>;

if(mainTask.length>0){
renderTask = mainTask.map((a,i) => {
  return(
   <li className='flex items-center justify-between'>
     <div className='flex items-center justify-between mb-5 w-2/3'>
    <h5 className='text-2xl font-semibold'>{a.title}</h5>
    <h6 className='text-xl font-semibold'>{a.desc}</h6>

    </div>
    <button
    onClick={()=>{
      deletHandeler(i)
    }}
     className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delet</button>
   </li>
  )
})
}

  return (
    <div>

    <h1 className='bg-black text-white p-5 text-center font-bold text-5xl'  >Abhinab Todo List</h1>

<form onSubmit={submitHandler}>

<input type="text" className='text-2xl border-zinc-800, m-5 border-2 py-2' placeholder='Enter title Here'  
  value={title}
  onChange={(e)=>{
    settitle(e.target.value)
  }}
/>
  

<input type="text" className='text-2xl border-zinc-800, m-5 border-2 py-2' placeholder='Enter Discription Here' 
value={desc}
onChange={(ab)=>{
  setdesc(ab.target.value)
}}
  
/>
  
  <button className='bg-black text-white px-4 py-4 text-2xl font-bold rounded m-5'>Add Task</button>

</form>


  <hr />
  <div className='p-8 bg-slate-200'>
  <ul>{renderTask}
  </ul>
  </div>

    </div>
  )
}

export default page
