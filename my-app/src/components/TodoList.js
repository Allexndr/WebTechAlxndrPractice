import React from "react";
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const items = ["Install React", "Study React", "Use React", "Build React App"];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}><TodoListItem label={item} /></li>
            ))}
        </ul>
    );
};

export default TodoList;
