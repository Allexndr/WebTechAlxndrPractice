import React from "react";
import ReactDOM from 'react-dom/client';
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import './index.css';

const todoData = [
    { label: "Install React", important: false },
    { label: "Study React", important: true },
    { label: "Use React", important: false },
    { label: "Build React App", important: true }
];

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
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
