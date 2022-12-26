import React from 'react'
import Item from './Item'

const Lists = ({items}) => {
  return (
   <div className='wrapper'>
        {items.map(item => (
            <Item key={item.id} item = {item}/>
        ))}
   </div>
  )
}

export default Lists
