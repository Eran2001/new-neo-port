import './Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "57d7e93b-8d2e-454f-9433-25047f4410e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src="/theme_pattern.svg" alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>let's talk</h1>
          <p>I'm currently avaliable to take on new designs, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className='contact-details'>
            <div className="contact-detail">
              <img src="/mail_icon.svg" alt="" /> <p>dumindudulanjana17@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="/location_icon.svg" alt="" /> <p>+94 74 0 519662</p>
            </div>
            <div className="contact-detail">
              <img src="/call_icon.svg" alt="" /> <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name'/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
