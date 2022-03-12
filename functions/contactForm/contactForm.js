const { GoogleSpreadsheet } = require("google-spreadsheet");
const axios = require("axios");

if (!process.env.NETLIFY) {
  require("dotenv").config();
}

if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
  throw new Error("no GOOGLE_SERVICE_ACCOUNT_EMAIL env var set");
if (!process.env.GOOGLE_PRIVATE_KEY)
  throw new Error("no GOOGLE_PRIVATE_KEY env var set");
if (!process.env.GOOGLE_SPREADSHEET_ID_FROM_URL)
  throw new Error("no GOOGLE_SPREADSHEET_ID_FROM_URL env var set");
if (!process.env.RECAPTCHA_SECRET_KEY)
  throw new Error("no RECAPTCHA_SECRET_KEY env var set");

const handler = async (event) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const token = JSON.parse(event.body).token;

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );

  if (!response.data.success) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message:
          "Invalid Recaptcha",
      }),
    };
  }

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  });
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];

  try {
    const data = JSON.parse(event.body);
    await sheet.addRow(data);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Submission Received",
      }),
    };
  } catch (err) {
    console.error("error ocurred in processing ", event);
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message:
          "Something went wrong, please try again or contact me via email",
      }),
    };
  }
};

module.exports = { handler };
