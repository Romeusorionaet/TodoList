import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import { Main } from './components/Main'
import { TasksProps } from './components/TaskCount';
import { Header } from './components/Header';
import { Form } from './components/Form';

export function App() {
  const [ tasks, setTasks ] = useState<TasksProps[]>(() => {
      const localTasksSave = localStorage.getItem('@saveTodoTasksIgnite')
      if(localTasksSave) {
          return JSON.parse(localTasksSave)
      }else{
          return []
      }
  })

  const [ newTask, setNewTask ] = useState('')

  function handleTask( event: ChangeEvent<HTMLInputElement> ) {
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
      <Header />

      <Form 
      handleTask={handleTask}
      handleNewTask={handleNewTask}
      newTask={newTask}
      />
      
      <Main tasks={tasks} setTasks={setTasks} />

    </div>
  )
}

