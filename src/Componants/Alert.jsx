import React from 'react'

function Alert(props) {
  return (
    <>
    <div className="alert alert-primary">
        {props.children}
    <button type='button' className='btn-close' onClick={props.onClick}></button>
    </div>
    </>
  )
}

export default Alert