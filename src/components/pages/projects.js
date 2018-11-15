import React from 'react';
import classes from './projects.css';
import Project from './project/project';

const projects = (props) => {
    return (
        <div className={classes.projects}>
            <Project name="Design" content="UI design and Poster"/>
            <Project name="Web Development" content="Front-End and Back-End"/>
            <Project name="Artificial Intelligence" content="Deep learning"/>
        </div>
    );
};

export default projects;