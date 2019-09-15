const fetch = require('node-fetch');
const swapi = require('./script2.js');

it('calls swapi to get people', () => {
  // expect.assertions: number how many `expect` running
  expect.assertions(1);
  // `return` promise to wait result for async
  return swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
