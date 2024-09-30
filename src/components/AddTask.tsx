import React from "react";
import Button from "./Button"
import Input from "./Input";
import {TasksContext} from '../pages/Home'
import useForm from "../hooks/useForm";

const TaskContext = React.createContext()

export default function AddTask() {
  const [inputValue, handleChange, handleSubmit] = useForm()
  const {text, title} = inputValue
  const {setTasks} = React.useContext(TasksContext)

  function enviar(e: { preventDefault: () => void }) {
    const newTask = {
      text: text,
      title: title
    }
    setTasks((prevTasks: any) => [...prevTasks, newTask])
  } 

  return (
    <div className="form-task">
      <form onSubmit={handleSubmit(enviar)}>
        <Input 
          className='form-control input-task' 
          type='text' 
          value={title}
          name='title'
          onChange={handleChange}
          placeholder='Título'
        />
        <Input 
          className='form-control input-task' 
          type='text' 
          value={text}
          name='text'
          onChange={handleChange}
          placeholder='Descrição'
        />
        <Button onClick={()=>{}} color='primary'>Adicionar</Button>
      </form>
    </div>
  )
}

export {TaskContext};