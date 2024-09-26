import React from 'react'
import Button from './Button'
import {TasksContext} from '../App'

interface Props {
  children: {},
  itemNumber: Number,
  title: String,
}

export default function TaskCard ({children, itemNumber, title}: Props) {
  const {tasks, setTasks} = React.useContext(TasksContext)

  function handleRemove () {
    const newTaks = tasks.filter((task, i) => i+1 !== itemNumber)
    setTasks(newTaks)
  }

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{children}</p>
          <Button color='danger' onClick={handleRemove}>Remover</Button>
          <Button onClick={()=>{}} color='primary'>Editar</Button>
        </div>
      </div>
    </>
    
  )
}