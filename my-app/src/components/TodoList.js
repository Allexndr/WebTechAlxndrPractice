import React from "react";
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const items = [
        { label: "Install React", important: false },
        { label: "Study React", important: true },
        { label: "Use React", important: false },
        { label: "Build React App", important: true }
    ];

    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <TodoListItem label={item.label} important={item.important} />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
