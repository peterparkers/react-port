import React from 'react';
import classes from './header.css';
import{
    Link
} from 'react-router-dom';

const header = (props) => {
    // const listCurrent = [];
    return (
        <div className={classes.header}>
            <nav>
                <ul>
                    <li><Link to="/" className={classes.current} onClick={props.current}>HOME</Link></li>
                    <li><Link to="/Skills" onClick={props.current}>SKILLS</Link></li>
                    <li><Link to="/Projects" onClick={props.current}>PROJECTS</Link></li>
                    <li><Link to="/Blog" onClick={props.current}>BLOG</Link></li>
                    <li><Link to="/About" onClick={props.current}>ABOUT</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default header;