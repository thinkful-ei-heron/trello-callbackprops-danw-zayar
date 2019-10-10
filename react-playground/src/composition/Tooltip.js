import React from 'react';

function Tooltip(props) {
    return (
      <span className='Tooltip'>
        <span className='Tooltip-content'>
          {props.children}
        </span>
        <div className='Tooltip-message'>
          {props.message}
        </div>
      </span>
    )
}

export default Tooltip;