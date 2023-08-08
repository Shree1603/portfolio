import React from 'react'
import { Link } from 'react-scroll'
import './Topcontent.css';
import res from '../../components/CV/res.pdf'
const Topcontent = () => {
  return (
    <div className='Topcontent'>
        <div className='Topcontent__container'>
            <h1>Mr. Shree Ram Ragavender</h1>
            <p>AI & DS Student From Saveetha School Of Engineering</p>
            <a href={res} download="res">
                <button className='Topcontent__downloadbutton'>Download cv</button>
            </a>
            {/* <Link to="projects" smooth={true} duration={500}>
                <button className='Topcontent__workbutton'>My work</button>
            </Link> */}
        </div>
      
    </div>
  )
}

export default Topcontent
