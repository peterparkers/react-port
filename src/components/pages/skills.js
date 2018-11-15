import React from 'react';
import classes from './skills.css';
import SkillComponent from './skill/skillComponent';

const skills = (props) => {
    return (
        <div className={classes.skills}>
            
            {/* Programming Language */}
            <div className={classes.programming}>
                {/* <h1>Programming Language</h1> */}
                <SkillComponent name="HTML5" />
                <SkillComponent name="CSS3" />
                <SkillComponent name="Javascript" />
                <SkillComponent name="Python" />
                <SkillComponent name="C++" />
            </div>

            {/* Framework */}
            <div className={classes.framework}>
                {/* <h1>Framework & Libraries</h1> */}
                <SkillComponent name="React.js" />
                <SkillComponent name="Boostrap" />
            </div>

            {/* Tools */}
            <div className={classes.tool}>
                {/* <h1>Tools</h1> */}
                <SkillComponent name="Node.js" />
                <SkillComponent name="Git" />
                <SkillComponent name="MongoDB" />
            </div>

            {/* Others */}
            <div className={classes.other}>
                {/* <h1>Other</h1> */}
                <SkillComponent name="Photoshop" />
                <SkillComponent name="Machine Learning" />
            </div>
        </div>
    );
};

export default skills;