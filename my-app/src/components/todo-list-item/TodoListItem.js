import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = {
        done: false // ✅ Теперь мы отслеживаем выполнение задачи
    };

    onLabelClick = () => {
        this.setState(({ done }) => ({
            done: !done // ✅ Переключаем значение `done` при клике
        }));
    };

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'; // ✅ Если `done: true`, добавляем класс `done`
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
                    onClick={this.onLabelClick} // ✅ При клике изменяется `done`
                >
                    {label}
                </span>
                <button type="button" className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}
