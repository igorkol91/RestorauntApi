import countMeals from '../__mocks__/itemCount.js';

const container = document.createElement('main');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
container.append(div1);
describe('Item meals count test', () => {
  test('checking the container return number of direct children', () => {
    expect(countMeals(container)).toEqual(1);
  });
  test('checking the container return number of 2 counts', () => {
    container.append(div2);
    expect(countMeals(container)).toEqual(2);
  });
  test('checking the container return number of 3 counts', () => {
    container.append(div3);
    expect(countMeals(container)).toEqual(3);
  });
});