const { selectResponse } = require('./utils/templates.js')

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const result = await selectResponse(request)
  const body = JSON.stringify(result)
  return new Response(body, {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    },
  })
}
