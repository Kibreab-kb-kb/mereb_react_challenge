import React from 'react'

const Button = ({text, rounded, bgColor, color, onClick, size}) => {
  return (
    <div className={`  h-8`} onClick={onClick} style={{
      borderRadius:rounded,
      backgroundColor: bgColor,
      color,
      width: size
    }}>
      {text}
    </div>
  )
}

export default Button
