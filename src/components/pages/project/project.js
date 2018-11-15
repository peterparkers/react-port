import React from 'react';
import classes from './project.css';

const project = (props) => {
    return (
        <div className={classes.project}>
            <div className={classes.card}>
                <div className={classes.front}>
                    <h2>{props.name}</h2>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default project;