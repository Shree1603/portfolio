import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../topcontent/Topcontent'
import './Topcontainer.css'
function Topcontainer() {
  return (
    <Element name='About' className='Topcontainer'>
        <Topcontent />
    </Element>
  )
}

export default Topcontainer
