import React from 'react'

function AppButton(props) {
  return (
    <>
    <button className='btn btn-danger' onClick={props.onClick} >Click Me</button>
    </>
  )
}

export default AppButton