import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="/footer_logo.svg" alt="" />
          <p>I am a graphic designer from, Sri Lanka with 2 years of experience in multiple freelancing design works.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src="/user_icon.svg" alt="" />
            <input type="email" placeholder='Enter your email'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 neo subasinghe. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
