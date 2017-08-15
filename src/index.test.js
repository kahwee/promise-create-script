const createScript = require('./index')

it('should be able to create script with valid url', () => {
  const uri = 'http://code.jquery.com/jquery-3.2.1.slim.min.js'
  return createScript(document.body, uri).then((script) => {
    expect(script.src).toEqual(uri)
  })
})
