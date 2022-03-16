import React from 'react'
import { FaGithub, FaCopy } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Button } from 'react-bootstrap'

const Intro = ({ setToastMsg }) => {
  let myEmail = 'lmfjeff@gmail.com'

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text)
    setToastMsg('Copied to clipboard')
  }

  return (
    <>
      <div style={{ backgroundImage: 'url(/background2.jpg)' }} className="intro">
        <h1>Jeff Lau</h1>
        <h2>Web Developer</h2>
        <p className="mt-3">
          <a href="https://github.com/lmfjeff" target="_blank" rel="noreferrer" className="mr-4 icon">
            <FaGithub size="3em" />
          </a>
          <Button className="fab d-inline-flex align-items-center" onClick={() => copyToClipboard(myEmail)}>
            <MdEmail size="1.5em" className="emailIcon" />
            <FaCopy size="1.5em" className="copyIcon " />
          </Button>
        </p>
      </div>
    </>
  )
}

export default Intro
