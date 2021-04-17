import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import {
  loadTodos,
  removeTodoRequest,
  updateTodoToCompleted,
} from './thunks';
import {
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from './selectors';
import './TodoList.css';

const TodoList = ({
  completedTodos = [],
  incompletedTodos = [],
  onRemovePressed,
  onCompletedPress,
  isLoading,
  startLoadingTodos
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>Incomplete:</h3>
      {incompletedTodos.map(todo =>
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPress={onCompletedPress}
        />
      )}
      <h3>Complete:</h3>
      {completedTodos.map(todo =>
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPress={onCompletedPress}
        />
      )}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: id => dispatch(removeTodoRequest(id)),
  onCompletedPress: id => dispatch(updateTodoToCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);