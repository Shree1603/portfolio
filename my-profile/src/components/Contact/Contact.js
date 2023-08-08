import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import {Instagram,Facebook} from '@mui/icons-material'
import './Contact.css'
const Contact = () => {
  return (
    <Element className='contact'  id='Contact'>
        <div className='contact__container'>
            <p>
                Email:<span> sriram6166@gmail.com</span>
            </p>
            <p>
                Github Username: <span>Shree1603</span>
            </p>
            <div className='contact__icons'>
                <a href='https://instagram.com/_.sreeeee.___?igshid=OGQ5ZDc2ODk2ZA=='>
                    <IconButton>
                        <Instagram/>
                    </IconButton>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100011767612734&mibextid=LQQJ4d'>
                    <IconButton>
                        <Facebook/>
                    </IconButton>
                </a>
            </div>
        </div>

    </Element>
  )
}

export default Contact
