import  AddTask from '../components/AddTask'
import  TaskCard from '../components/TaskCard'
import React from 'react'
import { Outlet } from 'react-router-dom'

const TasksContext = React.createContext()
const ToggleContext = React.createContext()

export default function Home() {
  const [tasks, setTasks] = React.useState([])

  return (
    <>
      <TasksContext.Provider value={{tasks, setTasks}}>
        <div className='app container-sm text-center'>
          <h1 className='mt-5'>Lista de Tarefas</h1>
          <AddTask/>
          <div className="row justify-content-md-center">
          <div className="col mt-5">
            {tasks && 
                <div className="row">
                  {tasks.map((item,i) => 
                  <div key={i} className="col-3 mb-4">
                    <TaskCard itemNumber={i+1} title={item.title}>{item.text}</TaskCard>
                  </div>
                  )}
                </div> 
              }
          </div>
          </div>
        </div>
        <Outlet/>
      </TasksContext.Provider>
    </>
    
  )
}

export {TasksContext, ToggleContext}
