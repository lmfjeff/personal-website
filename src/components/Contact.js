import axios from 'axios'
import React, { useState, useRef } from 'react'
import { Button, Container, Form, Spinner } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = ({ setToastMsg }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [token, setToken] = useState(null)
  const [showSpinner, setShowSpinner] = useState(false)
  const recaptchaRef = useRef()

  const onChange = value => {
    setToken(value)
  }

  const handleOnSubmit = async e => {
    e.preventDefault()

    if (!token) {
      setToastMsg('Please click the recaptcha')
      return
    }

    setShowSpinner(true)
    try {
      const resp = await axios.post('/.netlify/functions/contactForm', {
        email,
        name,
        message,
        token,
      })
      setToastMsg(resp.data.message)
      window.gtag('event', 'Email Signup')
    } catch (e) {
      if (e.response) {
        setToastMsg(e.response.data.message)
      }
    } finally {
      setEmail('')
      setName('')
      setMessage('')
      setToken(null)
      setShowSpinner(false)
      recaptchaRef.current.reset()
    }
  }

  return (
    <>
      {showSpinner && <Spinner animation="border" className="spinner" variant="primary"></Spinner>}

      <h1 id="contact" className="mt-5">
        Contact
      </h1>

      <h5>
        You can contact me by submitting the form, or via <a href="mailto:lmfjeff@gmail.com">lmfjeff@gmail.com</a>:
      </h5>

      <Container className="p-4 mb-4">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Your Contact Email</Form.Label>
            <Form.Control
              required
              name="email"
              type="email"
              placeholder="Enter Your Contact Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              name="message"
              as="textarea"
              rows={3}
              placeholder="Message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Form.Group>

          <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={onChange} ref={recaptchaRef} />

          <Button variant="primary" type="submit" className="mt-3" disabled={showSpinner}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Contact
