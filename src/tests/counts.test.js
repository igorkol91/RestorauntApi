import countMeals from '../modules/itemCount.js';

jest.mock('../modules/itemCount.js');
const container = `
<main class='main-container'>
<div></div>
<div></div>
<div></div>
<div></div>
</main>
`;
describe('Item meals count test', () => {
  test('checking the container return number of direct children', () => {
    console.log(document.querySelector('.main-container'));
    expect(countMeals()).toBe(4);
  });
});