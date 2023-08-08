import React from 'react'
import { Element } from 'react-scroll'
import './skillContainer.css'
import skk2 from '../../asset/skk2.jpg'
import LinearProgress from '@material-ui/core/LinearProgress'
// import { CircularProgressbar } from 'react-circular-progressbar';


const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='Skills'>
        <div className='skillContainer__image'>
            <img src={skk2} alt=''/>
        </div>
        <div className='skillContainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillContainer__skillset'>
                <h5>Python</h5>
                <div className='skillContainer__slider skillContainer__slider1'>
                    {<LinearProgress variant='determinate' value={85} /> }
                </div>
            </div>
            <div className='skillContainer__skillset'>
                <h5>C</h5>
                <div className='skillContainer__slider skillContainer__slider2'>
                    {<LinearProgress variant='determinate' value={90} /> }
                </div>
            </div>
            <div className='skillContainer__skillset'>
                <h5>Java</h5>
                <div className='skillContainer__slider skillContainer__slider3'>
                    {<LinearProgress variant='determinate' value={70} /> }
                </div>
            </div>
            <div className='skillContainer__skillset'>
                <h5>c++</h5>
                <div className='skillContainer__slider skillContainer__slider4'>
                    {<LinearProgress variant='determinate' value={65} /> }
                </div>
            </div>

        </div>

    </Element>
  )
}

export default SkillContainer
