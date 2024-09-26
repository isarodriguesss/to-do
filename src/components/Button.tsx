import React from 'react'

interface Props {
  children: String;
  color: String
  onClick: () => void
}

const Button = ({children, color, onClick}: Props) => {

  return (
    <button className={`btn btn-${color} m-2`} onClick={onClick}>{children}</button>
  )
}

export default Button