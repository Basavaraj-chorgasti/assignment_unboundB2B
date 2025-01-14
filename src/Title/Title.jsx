import React from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='title'>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title
