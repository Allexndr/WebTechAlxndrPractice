import React, { Component } from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import ItemAddForm from "../item-add-form/ItemAddForm";

import './app.css';

export default class App extends Component {
    maxId = 100; // ✅ Генерация уникального ID

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, done: false, id: 1 },
            { label: 'Make Awesome App', important: true, done: false, id: 2 },
            { label: 'Have a lunch', important: false, done: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = todoData.filter(item => item.id !== id);
            return { todoData: newArray };
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            done: false,
            id: this.maxId++
        };

        this.setState(({ todoData }) => ({
            todoData: [...todoData, newItem]
        }));
    };

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => ({
            todoData: todoData.map(item =>
                item.id === id ? { ...item, important: !item.important } : item
            )
        }));
    };

    onToggleDone = (id) => {
        this.setState(({ todoData }) => ({
            todoData: todoData.map(item =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        }));
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}
