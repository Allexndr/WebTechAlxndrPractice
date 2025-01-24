import React from 'react';

const TodoList = () => {
    const items = ['Install React', 'Study React', 'Use React', 'Build React App'];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

export default TodoList;
