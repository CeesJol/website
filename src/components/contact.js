import React from "react"

import Wave from "./wave"

const Contact = () => (
  <div className="container contact">
		<Wave reversed={true} />
    <div className="contact__content">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="tel" name="phone" placeholder="Phone number" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
)

export default Contact
