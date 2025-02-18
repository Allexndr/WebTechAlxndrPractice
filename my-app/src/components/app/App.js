import React, { Component } from 'react';
import AppHeader from '../app-header/AppHeader';
import SearchPanel from '../search-panel/SearchPanel';
import TodoList from '../todo-list/TodoList';
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter';
import ItemAddForm from "../item-add-form/ItemAddForm";

import './app.css';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '' // ✅ Хранит текущий текст поиска
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const newArray = todoData.filter(item => item.id !== id);
            return { todoData: newArray };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => ({
            todoData: [...todoData, newItem]
        }));
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) =>
            item.label.toLowerCase().includes(term.toLowerCase())
        );
    }

    render() {
        const { todoData, term } = this.state;
        const visibleItems = this.search(todoData, term);
        const doneCount = todoData.filter((element) => element.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange} /> {/* ✅ Передаём поиск */}
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={visibleItems} // ✅ Передаём отфильтрованный список
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}
