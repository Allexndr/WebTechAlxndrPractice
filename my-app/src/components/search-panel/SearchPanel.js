import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        term: '' // ✅ Хранит введённый текст поиска
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term); // ✅ Передаём `term` в `App.js`
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   placeholder="Type to search"
                   value={this.state.term} // ✅ Связываем `input` с `state`
                   onChange={this.onSearchChange} />
        );
    }
}
