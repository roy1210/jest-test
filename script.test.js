const googleSearch = require('./script.js');

dbMock = ['dog.com', 'cheesepuff.com', 'disney.com', 'dogpicture.com'];

describe('googleSearch', () => {
  it('is searching google', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpicture.com']);
  });

  it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('does not return  more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
