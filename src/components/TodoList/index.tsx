import type { DispatchSetStateAction } from "../../types/util";
import {Todo as TodoType} from "../../types/todo";
import Todo from "../Todo";

interface TodoListProps{
    todos: TodoType[];
    searchValue: string;
    deleteTodo: (id: TodoType["id"]) => void;
    setSelectedTodoIds: DispatchSetStateAction<TodoType["id"][]>;
}

function TodoList({
    todos,
    searchValue,
    deleteTodo,
    setSelectedTodoIds
}:TodoListProps){
    return (
        <ul>
            {todos.map(({id, name})=>{
                const handleDeletTodo = () =>{
                    deleteTodo(id);
                };

                const handleSelected = (checked: boolean) =>{
                    if(checked){
                        setSelectedTodoIds((prevState) => [...prevState, id]);
                    }else{
                        setSelectedTodoIds((prevState) => 
                            prevState.filter((prevId) => prevId !== id)
                        );
                    }
                    console.log({id, checked});
                };

                return(
                    <Todo name={name} key={id} deleteTodo={handleDeletTodo} handleSelected={handleSelected} />
                )
            })}
        </ul>
    )
}

// function TodoList(props: TodoListInputProps){
//     return <input {...props}/>
//   }

export default TodoList;
