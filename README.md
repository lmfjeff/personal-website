# Portfolio website

This is the repository for my portfolio website

## Used Technology

| **Package**       | **Usage**          |
| ----------------- | ------------------ |
| React             | frontend           |
| Netlify functions | backend api        |
| React-bootstrap   | component library  |
| Google recaptcha  | form submisson     |
| Google Tag        | analytics          |
| Google sheets api | edit google sheets |
| Animate.css       | animation          |


## Development

- create .env
  - GOOGLE_SERVICE_ACCOUNT_EMAIL
  - GOOGLE_PRIVATE_KEY
  - GOOGLE_SPREADSHEET_ID_FROM_URL
  - RECAPTCHA_SECRET_KEY
  - REACT_APP_RECAPTCHA_SITE_KEY

```bash
yarn install

## start react dev server and deploy local netlify functions
netlify dev 
```

## Deployment

- create netlify site by importing from github repository
- set env var in netlify 