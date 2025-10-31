import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList/components';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Learn React',
        },
        {
            id: 2,
            title: 'Learn Redux',
        },
        {
            id: 3,
            title: 'Learn JavaScript',
        },
    ];
    return (
        <div>
            <h2>To Do List</h2>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;