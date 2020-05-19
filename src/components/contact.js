import React from "react"

const Contact = () => (
	<form name="contact" method="POST" data-netlify="true">
		{/* You still need to add the hidden input with the form name to your JSX form */}
		<input type="hidden" name="form-name" value="contact" />
		<p>
			<label>Your Name: <input type="text" name="name" /></label>   
		</p>
		<p>
			<label>Your Email: <input type="email" name="email" /></label>
		</p>
		<p>
			<label>Your Role: <select name="role[]" multiple>
				<option value="leader">Leader</option>
				<option value="follower">Follower</option>
			</select></label>
		</p>
		<p>
			<label>Message: <textarea name="message"></textarea></label>
		</p>
		<p>
			<button type="submit">Send</button>
		</p>
	</form>
)

export default Contact