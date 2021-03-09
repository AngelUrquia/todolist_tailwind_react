import {MdDone, MdDelete} from 'react-icons/md';

function TodoListItem({descripcion,id,completed, doneHandler, deleteHandler}) {
    const onClick = (e) => {
        doneHandler(id);
    }
    const onDeleteClick = (e)=>{
        deleteHandler(id);
    }

    const myClass = (completed)?"striked": "";
    return(
    <li className="flex text-md max-w-lg items-center h-16 px-8 m-auto border rounded-lg bg-red-300 bg-opacity-100 justify-between">
        <span className={myClass}>{descripcion}</span>
        <span className="flex">
        <MdDone size={"2rem"} onClick={onClick}></MdDone>
        <MdDelete size={"2rem"} onClick={onDeleteClick}></MdDelete>
        </span>
        </li>
    );
    
}
function TodoList({todos, doneHandler, deleteHandler}) {
    const todosItems = todos.map((o)=>{
        return (
            <TodoListItem
                key={o.doneHandler}
                descripcion={o.description}
                id={o.id}
                completed={o.completed}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
            />
        )
    });
    return(
        <section>
        <ul>
           {todosItems}
        </ul>
    </section>
    );
    
}

export default TodoList;