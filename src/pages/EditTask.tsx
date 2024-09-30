import { useParams } from 'react-router-dom'
import { TasksContext } from './Home'
import React from 'react'
import useForm from "../hooks/useForm";
import Input from '../components/Input';
import Button from '../components/Button';

export default function EditTask () {
  const {tasks, setTasks} = React.useContext(TasksContext)
  const [inputValue, handleChange, handleSubmit] = useForm()
  const params = useParams()
  const filterTask = tasks.filter((task, i) => i+1 == params.id).shift()
  const {text, title} = inputValue

  function enviar(e: { preventDefault: () => void }) {
    const newTask = {
      text: text,
      title: title
    }
    setTasks((prevTasks: any) => [...prevTasks, newTask])
  }

  return (
    <div className="darkBG">
      <div className="centered">
        <div className="my-modal">
        <div className="form-task">
          <form onSubmit={handleSubmit(enviar)}>
            <Input 
              className='form-control edit-task' 
              type='text' 
              value={filterTask.title}
              name='title'
              onChange={handleChange}
              placeholder='Título'
            />
            <Input 
              className='form-control edit-task' 
              type='text' 
              value={filterTask.text}
              name='text'
              onChange={handleChange}
              placeholder='Descrição'
            />
            <Button onClick={()=>{}} color='primary'>Editar</Button>
          </form>
        </div>
        </div>
      </div>
    </div>

  )
}