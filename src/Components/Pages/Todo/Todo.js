import {useState } from 'react';
import { MdDelete } from 'react-icons/md';
import NewTodo from './NewTodo';
import TodoList from './TodoList';
import "./TodoList.css";

function Todo(){
    const [TodoData, setTodoData]= useState({
        todos:[],
        newTodo: "",
    });

    const onChange = (e)=>{
        const {name, value} = e.currentTarget;
        setTodoData({...TodoData, newTodo: value});
    };
    const onAddNew = (e) => {
        alert("Click en Boton +")
        let newToo = {
            description: TodoData.newTodo, 
            completed: false, 
            id: new Date().getTime()
        };

        let newTodos = TodoData.todos;
        newTodos.push(newToo);

        setTodoData ({todos:newTodos, newTodo: ""});
    }

    const doneHandler = (id)=>{
        const newTodos= TodoData.todos.filter((o)=>{
            if (o.id == id){
                o.completed = !o.completed;
            }
            return o;
        });

        setTodoData({...TodoData, todos:newTodos});
    }

    const deleteHandler = (id)=>{
        const newTodos= TodoData.todos.filter((o)=>{
            return o.id !==id;
        });

        setTodoData({...TodoData, todos:newTodos});
    }
    
    const tmpTodos = TodoData.todos.map( (o)=>{return JSON.stringify(o)} ).join(" | ");

    return(
        <section>
           <NewTodo
            onChange={onChange}
            value={TodoData.newTodo}
            onAddNew={onAddNew}
           ></NewTodo>
           <TodoList 
           todos= {TodoData.todos}
           doneHandler={doneHandler}
           deleteHandler={deleteHandler}
           ></TodoList>
        </section>
    )    

}
export default Todo;