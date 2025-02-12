import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    state = {
        done: false // ✅ Теперь начальное состояние `done` = false
    };

    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`);
        this.setState({
            done: true // ✅ Теперь при клике всегда становится `done: true`
        });
    };

    render() {
        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done'; // ✅ Добавляется класс "done"
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
                    onClick={this.onLabelClick} // ✅ Теперь задача точно будет выполнена при клике
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
