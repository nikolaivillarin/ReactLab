import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, completeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPress }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map(todo =>
      <TodoListItem
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPress={onCompletedPress}
      />
    )}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPress: text => dispatch(completeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);