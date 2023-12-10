import React, { useEffect } from "react";
import AddTodo from "./AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { GetTodoServer } from "../Redux/action";
import Singletodo from "./Singletodo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((store) => store.todo.todos);
  const loading = useSelector((store) => store.todo.loading);
  console.log(todos);
  useEffect(() => {
    dispatch(GetTodoServer);
  },[]);
       return loading?<h1>Loading........</h1>:(
    <div>
      <AddTodo />

      {todos && todos.length > 0 ? (
        <div>
          {todos.map((el) => (
            <Singletodo key={el.id} el={el} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Todo;
