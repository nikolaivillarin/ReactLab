import React from 'react';
import styled from 'styled-components';

const TudoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleFromDate = (startingDate, currentDate) =>
(startingDate > new Date(currentDate - 86400000 * 5)
  ? 'none'
  : '2px solid red');

const TodoItemContainerWithWarning = styled(TudoItemContainer)`
  border-bottom: ${props => getBorderStyleFromDate(new Date(props.createdAt), Date.now())};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`;

const CompletedButton = styled(Button)`
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPress }) => {
  const Container = todo.isCompleted ? TudoItemContainer : TodoItemContainerWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {(new Date(todo.createdAt)).toLocaleDateString()}
      </p>
      <ButtonsContainer>
        {!todo.isCompleted &&
          <CompletedButton
            onClick={() => onCompletedPress(todo.id)}
          >
            Mark As Completed
          </CompletedButton>
        }
        <RemoveButton
          onClick={() => onRemovePressed(todo.id)}
        >
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </Container>
  )
};

export default TodoListItem;