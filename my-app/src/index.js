import React from "react";
import ReactDOM from 'react-dom/client';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter";
import './index.css';

const todoData = [
    { label: "Install React", important: false, id: 1 },
    { label: "Study React", important: true, id: 2 },
    { label: "Use React", important: false, id: 3 },
    { label: "Build React App", important: true, id: 4 }
];

const App = () => {
    return (
        <div className="container">
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
            <ItemStatusFilter />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
