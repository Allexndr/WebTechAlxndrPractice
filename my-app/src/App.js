import React from 'react';
import AppHeader from './AppHeader';
import SearchPanel from './SearchPanel';
import TodoList from './TodoList';

function App() {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
}

export default App;
