import React from 'react';
import TodolistItem from './TodolistItem';
import './Todolist.css';

const Todolist=({todos, onRemove,onToggle})=>{
return(
<div className="Todolist">

    {todos.map(todo =>(
        <TodolistItem todo={todo} key={todo.id} onRemove={onRemove}
        onToggle={onToggle}
        />
    ))}
   
</div>
);
};

export default Todolist;