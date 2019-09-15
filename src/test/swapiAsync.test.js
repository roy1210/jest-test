const fetch = require('node-fetch');
const swapi = require('../script/swapiAsync');

it('calls swapi to get people', () => {
  // expect.assertions: number how many `expect` running. Call this to make sure async function has called
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

// async takes time to get return, so jest has function to mock the return value
it('getPeople returns count and results', () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [0, 1, 2, 3, 4, 5]
        })
    })
  );

  expect.assertions(4);
  // return mockFetch value as async returns
  return swapi.getPeoplePromise(mockFetch).then(data => {
    // using mock qty
    expect(mockFetch.mock.calls.length).toBe(1);
    // mockFetch is returned value (fake) from the url of
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
