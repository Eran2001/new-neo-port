import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src="/them_pattern.svg" alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src="/dumi.jpeg" alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I'm a graphic designer with 2 years of experience, specializing in photo edits using Photoshop and Pixellab, and video editing with CapCut and Alight Motion. Let's create something exceptional together.</p>
            <p>My passion for graphic design is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>PhotoShop</p><hr style={{width:"40%"}}/></div>
            <div className="about-skill"><p>Pixellab</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Capcut</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Alight Motion</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100+</h1>
          <p>DESIGNS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
