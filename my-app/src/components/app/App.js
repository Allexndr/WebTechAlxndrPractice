import React, { Component } from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import ItemAddForm from "../item-add-form/ItemAddForm";

import './app.css';

export default class App extends Component {
    maxId = 100; // ✅ Счётчик для генерации уникальных ID

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((element) => element.id === id);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newArray
            };
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++ // ✅ Генерируем уникальный `id`
        };

        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            };
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
                <ItemAddForm onItemAdded={this.addItem} /> {/* ✅ Теперь кнопка передаёт `onItemAdded` */}
            </div>
        );
    }
}
