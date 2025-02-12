import React, { Component } from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';

import './app.css';

export default class App extends Component {
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

            // Разбиваем массив на две части: до удалённого элемента и после
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            // Объединяем массив без удалённого элемента
            const newArray = [...before, ...after];

            return {
                todoData: newArray
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
            </div>
        );
    }
}
