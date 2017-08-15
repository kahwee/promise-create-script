/**
 * Creates the script element and provides a callback via onload
 * @param  {[type]} el  [description]
 * @param  {[type]} uri [description]
 * @return {[type]}     [description]
 */
module.exports = function (el, uri) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script')
    script.src = uri
    script.type = 'text/javascript'
    script.onload = function () {
      resolve(script)
    }
    script.onerror = function (err) {
      reject(new Error('Script "' + err.target.src + '" is not accessible.'))
    }
    el.appendChild(script)
  })
}
