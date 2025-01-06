import './MyWork.css'
import mywork_data from '../../../public/mywork_data.js'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src='/theme_pattern.svg' alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img key={index} src={work.w_img} alt='' />
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src="/arrow_icon.svg" alt="" />
      </div>
    </div>
  )
}

export default MyWork
