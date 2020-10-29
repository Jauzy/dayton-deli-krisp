import React from 'react'

import MailchimpForm from './MailchimpForm'

const SubFooter = (props) => {
  return (
    <div>
      <div className='shape-wave-bottom'></div>
      <div className="bg-dark">
        <MailchimpForm />
      </div>
    </div>
  )
}

export default SubFooter