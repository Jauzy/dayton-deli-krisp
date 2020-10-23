import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default function MailchimpForm(props) {
  const [email, setEmail] = useState('')
  const [mailResponse, setMailResponse] = useState({
    result: 'unknown',
    msg: ''
  })

  const _handleSubmit = async (e) => {
    e.preventDefault()
    const response = await addToMailchimp(email)
    setMailResponse(response)
  }

  const handleChange = event => {
    setEmail(event.target.value)
  }

  return (
    <div className="d-flex mx-auto text-light w-75 pb-5 pt-4 row">
      <div className="col-md-6 col-sm-12 pr-5 mb-2 text-center">
        <h3>Subscribe to our Newsletter to get more updates about our products and many more!</h3>
      </div>
      <div className="d-flex align-items-center col-md-6 col-sm-12 font-roboto">
        <form className="w-100" onSubmit={_handleSubmit}>
          <div className="row">
            <input className="form-control col-md-6 col-sm-12 m-2" name="email" type="text" placeholder="Input your email here" onChange={handleChange} />
            <button className="col-md-2 btn btn-warning ml-2 m-2" type="submit">Submit</button>
          </div>
          <div className="m-2">
            { mailResponse.result === 'success' ? 
              <div className="row alert alert-success" dangerouslySetInnerHTML={{__html: mailResponse.msg}}></div> :
              mailResponse.result === 'error' ? 
              <div className="row alert alert-danger" dangerouslySetInnerHTML={{__html: mailResponse.msg}}></div> :
              ''
            }
          </div>
        </form>
      </div>
    </div>
  )
}