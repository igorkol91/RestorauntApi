import commentsCounter from '../modules/commentsCounter.js';

describe('Comments count test', () => {
  test('Adding one comment returns 1 as the total count', () => {
    expect(
      commentsCounter([
        {
          comment: 'This is nice!',
          creation_date: '2021-01-10',
          username: 'John',
        },
      ]),
    ).toBe(1);
  });
  test('Adding three comments returns 3 as the total count', () => {
    expect(
      commentsCounter([
        {
          comment: 'This is anothe comment',
          creation_date: '2021-02-10',
          username: 'Jude',
        },
        {
          comment: 'What is there is very simple',
          creation_date: '2021-03-10',
          username: 'John',
        },
        {
          comment: 'Check this out, please.',
          creation_date: '2021-09-10',
          username: 'John',
        },
      ]),
    ).toBe(3);
  });
  test('Adding no comment returns 0 as the total count', () => {
    expect(commentsCounter([])).toBe(0);
  });
});
