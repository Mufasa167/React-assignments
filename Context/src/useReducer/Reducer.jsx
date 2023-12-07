import React,{useReducer, useState} from 'react'

const ACTION={
    ADD_TODO:"add-todo",
    REMOVE_TODO:"remove_todo",
    UPDATE_TODO:"update-todo" ,
    TOGGLE_TODO:"toggle-todo"
}


function reducer (state,action){
    console.log(action);

    switch(action.type){
        case ACTION.ADD_TODO:
            return [...state,{id:Math.random(),text: action.payload, done: false},]
    
        case ACTION.REMOVE_TODO:
            return state.filter((todo)=>todo.id !==action.payload)    
       

        case ACTION.UPDATE_TODO:
            return state.map((todo)=>todo.id ===action.payload.id? 
            {...todo,text:action.payload.text}
            : todo)   
        case ACTION.TOGGLE_TODO:
                return state.map((todo)=>
                todo.id===todo
                )
    } 
        }


export const Reducer = () => {
    const [todos,dispatch]=useReducer(reducer,[])
    const [inputVal, setInputVal]=useState("")

    function addToDo(){
        dispatch({type:"add-todo", payload: inputVal})
    }

    function removeToDo(id){
         dispatch({type:ACTION.REMOVE_TODO, payload:id})
    }

    function updateToDo(id){
        dispatch({type:ACTION.UPDATE_TODO, payload:{id,text:inputVal}})
   }

   function toggleToDo(){
      dispatch({type:ACTION.TOGGLE_TODO, payload:id})
   }
  return (
    <div>
        <h1>Todo-List</h1>
        
        <input type="text"
        value={inputVal}
        onChange={(e)=>setInputVal(e.target.value)} />
        
        <button onClick={addToDo}>Add</button>.
        <ul>
         {todos.map((todo)=>(
         <React.Fragment key={todo.id}>
            <li style={{textDecoration: todo.done ? "line-through": "none"}}>{todo.text}</li>
           
            <input type='checkbox'
            checked={todo.done ? }
            onChange={()=>toggleToDo(todo.id)}
            />
            <button onClick={()=>removeToDo(todo.id)}>Remove</button>
            <button onClick={()=>updateToDo(todo.id)}>Update</button>
         </React.Fragment>
         ))}
         
        </ul>
        </div>
  )
}
