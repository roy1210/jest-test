const fetch = require('node-fetch');

// fetch: dependency injection to use fetch from endpoint URL
const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

const getPeople = async fetch => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results
  };
};

getPeople(fetch);

module.exports = {
  getPeople,
  getPeoplePromise
};
