import React from 'react'
import { useDispatch } from 'react-redux';
import { DeleteServerTodo, TodoUpdate } from '../Redux/action';

import styles from '../Styles/SingleTodo.module.css'

const Singletodo = ({el}) => {
    const dispatch=useDispatch()

    const handleToggle=()=>{
        let toggle={
            id: el.id,
           status:el.status?false:true
        }
        dispatch(TodoUpdate(toggle))
    }
     const handleEdit=()=>{
        const newtitle = window.prompt("Enter New Title");
        let data={
            id:el.id,
            title:newtitle
        }
        console.log(dispatch(TodoUpdate(data)))
        dispatch(TodoUpdate(data))
     }

  return (
    <div className={styles.single}>
    <div key={el.id}>
                <p className={styles.para}>Title:{el.title}</p>
                   <p className={styles.para}>{el.status?"Completed":"NotCompleted"}</p>
                   <button className={styles.edit} onClick={handleEdit}>Edit</button>
                   <button  className={styles.edit} onClick={handleToggle}>Toggle</button>
                   <button  className={styles.edit} onClick={()=>dispatch(DeleteServerTodo(el.id))}>Delete</button>
                  </div>
                  </div>
  )
}

export default Singletodo