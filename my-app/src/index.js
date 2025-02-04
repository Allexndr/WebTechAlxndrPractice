import React from "react";
import ReactDOM from 'react-dom/client'; // ✅ Импортируем createRoot
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter";
import './index.css';

const todoData = [
    { label: 'Drink Coffee', important: false, done: false, id: 1 },
    { label: 'React Application', important: true, done: true, id: 2 },
    { label: 'Make notes from your study', important: false, done: false, id: 3 },
    { label: 'Do not drink alcohol', important: false, done: false, id: 4 }
];

const App = () => {
    const toDoCount = todoData.filter((item) => !item.done).length;
    const doneCount = todoData.filter((item) => item.done).length;

    return (
        <div className="todo-app">
            <AppHeader toDo={toDoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
