// src/components/AboutAndSkills.jsx
import React from 'react';
import About from './subcomponents/About.jsx';
import Skill from './subcomponents/Skill.jsx';
import Education from './subcomponents/Education.jsx'
import Certificate from './subcomponents/Certificate.jsx'


function AboutAndSkills() {
    return (
        <div>
            <About />
            <Skill />
            <Certificate/>
            <Education/>
        </div>
    );
}

export default AboutAndSkills;
