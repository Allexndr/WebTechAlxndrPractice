import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState(({ done }) => ({
            done: !done // ✅ Теперь можно включать и выключать `done`
        }));
    };

    onMarkImportant = () => {
        this.setState(({ important }) => ({
            important: !important // ✅ Теперь можно включать и выключать `important`
        }));
    };

    render() {
        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'; // ✅ Добавляется класс "done"
        }
        if (important) {
            classNames += ' important'; // ✅ Добавляется класс "important"
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    style={style}
                    onClick={this.onLabelClick} // ✅ Теперь задача отмечается/снимается
                >
                    {label}
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm float-right"
                        onClick={this.onMarkImportant} // ✅ Кнопка "важное"
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
