import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePress }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={evt => setInputValue(evt.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText =
            todos.some(todo => todo.text === inputValue);

          if (!isDuplicateText) {
            onCreatePress(inputValue);
            setInputValue('');
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  todos: getTodos(state),
});

const mapDispatchToProps = dispatch => ({
  onCreatePress: text => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);