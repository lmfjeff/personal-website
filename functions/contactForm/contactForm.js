const { GoogleSpreadsheet } = require('google-spreadsheet')
const axios = require('axios')

const handler = async event => {
  const secret = process.env.RECAPTCHA_SECRET_KEY
  const data = JSON.parse(event.body)

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${data.token}`
  )

  if (!response.data.success) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Invalid Recaptcha',
      }),
    }
  }

  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    await sheet.addRow(data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Submission Received',
      }),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Something went wrong, please try again or contact me via email',
      }),
    }
  }
}

module.exports = { handler }
