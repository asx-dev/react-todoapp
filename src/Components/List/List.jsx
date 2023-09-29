import React from 'react'
import Card from '../Card/Card'
import './List.css'
const List = ({ tasks }) => {
  let todoList = tasks.map((task, index) => <Card key={index} task={task}/>)
  return <div className='list'>{todoList}</div>
}

export default List
