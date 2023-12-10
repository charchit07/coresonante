import { Add_Todo, Get_Todo, Update_Todo, error, loading,Delete_Todo} from "./actionType"

 import axios from"axios"
 
 export const AddTodotoServer=(data)=>async(dispatch)=>{
         dispatch({type:loading})
      await axios.post("https://json-server-67lf.onrender.com/Todos",data)
        .then((res)=>dispatch({type:Add_Todo,payload:res.data}))
}

export const GetTodoServer=async(dispatch)=>{
              dispatch({type:loading})
              await axios.get("https://json-server-67lf.onrender.com/Todos")
              .then((res)=> {
               dispatch({type:Get_Todo,payload:res.data}) })
              .catch((err)=>dispatch({type:error}))
}

  export const TodoUpdate=(data)=>async(dispatch)=>{
     dispatch({type:loading})
     await axios.patch(`https://json-server-67lf.onrender.com/Todos/${data.id}`,data)
     .then((res)=>{
        console.log(res)
        dispatch({type:Update_Todo,payload:res.data})
     }
 
     )
     .catch((err)=>dispatch({type:error}))
}

export const DeleteServerTodo=(id)=>async(dispatch)=>{
        dispatch({type:loading})
         let todosId=id
        await axios.delete(`https://json-server-67lf.onrender.com/Todos/${id}`)
        .then((res)=>dispatch({type:Delete_Todo,payload:todosId}))
        .catch((err)=>dispatch({type:error}))
   }
   
