import { expect } from 'chai';
import { getBorderStyleFromDate } from '../TodoListItem';

describe('getBorderStyleForDate', () => {
  it('returns none when the date is less than five days ago', () => {
    // Arrange
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 3);

    const expected = 'none';

    // Act
    const actual = getBorderStyleFromDate(recentDate, today);

    // Assert
    expect(actual).to.deep.equal(expected);
  });

  it('returns a border when the date is more than five days ago', () => {
    // Arrange
    const today = Date.now();
    const recentDate = new Date(Date.now() - 86400000 * 6);

    const expected = '2px solid red';

    // Act
    const actual = getBorderStyleFromDate(recentDate, today);

    // Assert
    expect(actual).to.deep.equal(expected);
  });
});