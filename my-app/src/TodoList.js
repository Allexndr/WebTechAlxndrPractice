import React from 'react';
import './TodoList.css';

const TodoList = () => {
    return (
        <div>
            <h1>My Todo List</h1>
            <input placeholder="search" />
            <ul>
                <li>Install React</li>
                <li>Study React</li>
                <li>Use React</li>
                <li>Build React App</li>
            </ul>
        </div>
    );
};

export default TodoList;
