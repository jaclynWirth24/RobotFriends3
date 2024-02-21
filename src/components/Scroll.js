import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    //anything inbetween the opening and closing tags of the Scroll component will be rendered here
    return (
        <div className='scrollBar'>
            {props.children}
        </div>
    );
}

export default Scroll;