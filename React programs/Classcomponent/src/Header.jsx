import React, {PureComponent} from 'react'

 class Header extends PureComponent {
  render() {
    return (
      <div className='d-flex bg-secondary text-white h-100'>
        <img src="https://lms.achieversit.com/assets/images/logo.png" alt="" />
        <ul className='d-flex flex-grow-1 justify-content-between p-4 list-unstyled'>
             <li>Home</li>
             <li>Courses</li>
             <li>Placements</li>
             <li>Internships</li>
             <li>Review</li>
             <li>Blog</li>
        </ul>
        

      </div>
      
      
    )
  }
}

export {Header}
