import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import logoTodo from './assets/logoTodo.svg'
import styles from './App.module.css'
import { Main } from './components/Main'
import { TasksProps } from './components/TaskCount';

export function App() {
  const [ tasks, setTasks ] = useState<TasksProps[]>(() => {
      const localTasks = localStorage.getItem('@saveTodoTasksIgnite')
      if(localTasks) {
          return JSON.parse(localTasks)
      }else{
          return []
      }
  })

  const [ newTask, setNewTask ] = useState('')

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleNewTask( event: FormEvent ) {
    event.preventDefault()

    setTasks([...tasks, 
      {
        id: uuidv4(), 
        text: newTask, 
        isComplete: false,
      }
    ])
    setNewTask('')
  }

  return (
    <div>

      <div className={styles.header}>
        <img src={logoTodo} alt='logo todo' />
      </div>

      <form onSubmit={handleNewTask}>
        <input value={newTask} required type='text' onChange={handleTask}/>
        <button type='submit'>Criar</button>
      </form>
      
      <Main tasks={tasks} setTasks={setTasks} />

    </div>
  )
}

