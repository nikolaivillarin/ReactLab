import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
  it('Returns only completed todos', () => {
    // Arrange
    const fakeTodos = [{
      text: 'Say Hello',
      isCompleted: true,
    }, {
      text: 'Say Goodbye',
      isCompleted: false,
    }, {
      text: 'Climb Mount Everest',
      isCompleted: false,
    }];

    const expected = [{
      text: 'Say Hello',
      isCompleted: true,
    }];

    // Act
    // reselect provides .resultFunc for testing
    const actual = getCompletedTodos.resultFunc(fakeTodos);

    // Assert
    expect(actual).to.deep.equal(expected);
  });
});