const axios = require('axios')
// import { axios } from 'axios'

exports.handler = async function (event, _context, callback) {
  const contentId = event.queryStringParameters.id
  const contentDraftKey = event.queryStringParameters.draftKey

  const getPreviewData = await axios
    .get(`${process.env.API_URL}/blog/${contentId}?draftKey=${contentDraftKey}`, {
      headers: { 'X-API-KEY': process.env.API_KEY },
    })
    .then(({ data }) => ({
      statusCode: 200,
      body: JSON.stringify(data),
    }))

  callback(null, {
    statusCode: 200,
    body: getPreviewData.body,
  })
}
