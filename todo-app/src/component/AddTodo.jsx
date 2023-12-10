import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddTodotoServer } from '../Redux/action'

import styles from '../Styles/AddTodo.module.css'

const AddTodo = () => {
  const [todo,setTodo]=useState("")
  let dispatch=useDispatch()
  const handleAddTodo=(e)=>{
     e.preventDefault()
     const obj={
        id:Date.now(),
        title: todo,
        status:false
     }
       dispatch(AddTodotoServer(obj))
       setTodo("")
  }
  return (
    <div className={styles.todo}>
        <input className={styles.field} type="text" value={todo} 
        onChange={(e)=>setTodo(e.target.value)} />
        <button className={styles.btn} onClick={handleAddTodo}>Add</button>

    </div>
  )
}

export default AddTodo