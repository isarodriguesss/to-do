import './App.css'
import  AddTask from './components/AddTask'
import  Modal from './components/Modal'
import  TaskCard from './components/TaskCard'
import React from 'react'

const TasksContext = React.createContext()
const ToggleContext = React.createContext()

export default function App() {
  const [tasks, setTasks] = React.useState([])
  const [toggle, setToggle] = React.useState(false)

  /* const [searchTaks, setSearchTask] = useSearchParams()
  const taskFilter = searchTaks.get('task')

  const displayTasks = taskFilter
    ? tasks.filter(char=>char.text.toLowerCase()===taskFilter)
    : tasks */
  console.log(tasks)
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
      </TasksContext.Provider>
    </>
    
  )
}

export {TasksContext, ToggleContext}
