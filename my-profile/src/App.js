import React from 'react'
import Header from './components/Header/Header'
import Topcontainer from './components/topcontainer/Topcontainer'
import SkillContainer from './components/skillcontainer/skillcontainer' 
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import Contact from './components/Contact/Contact'
const App= () => {
  return (
    <div>
      <Header />
      <Topcontainer />
      <SkillContainer/>
      <ExperienceContainer/>
      <Contact/>
</div>
  )
}
export default App