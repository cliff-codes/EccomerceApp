import React from 'react'

const ControllerBtn = ({operator}) => {

    const btnStyle = {
        width: '40px',
        height: '40px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundColor: '#f1f1f1',
        color: '#161616',
        border: 'none',
        fontWeight: '600',
        fontSize: '18px',
    }
  return (
    <button className='roundedBtn' style={btnStyle}>
      {operator}
    </button>
  )
}

export default ControllerBtn
