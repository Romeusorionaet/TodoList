import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import logoTodo from './assets/logoTodo.svg'
import styles from './App.module.css'
import { Task } from './components/Task'
import { TaskCount } from './components/TaskCount';

export function App() {
  const [ newTask, setNewTask ] = useState([{
    id: uuidv4(),
    text: 'Sua Primeira tarefa será criar uma e concluir!',
    isComplete: false,
  }])

  const [ task, setTask ] = useState('')

  function handleTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value)
  }

  function handleNewTask() {
    if( task.length === 0 ){
      return
    }else{
      setNewTask([...newTask, 
        {
          id: uuidv4(), 
          text: task, 
          isComplete: false
        }
      ])
    }
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = newTask.filter(task => {
        return task.id !== taskToDelete
    })
    setNewTask(tasksWithoutDeleteOne)
  }

  return (
    <div>

      <div className={styles.header}>
        <img src={logoTodo} alt='logo todo' />
      </div>

      <div className={styles.input_wrapper}>
        <input type='text' onChange={handleTask}/>
        <button onClick={handleNewTask}>Criar</button>
      </div>
      
      <main>
        <TaskCount
          newTask={newTask}
        />

        {
          newTask.map(task => {
            return(
              <Task
                key={task.id}
                id={task.id}
                text={task.text}
                onDeleteTask={deleteTask}
              />
            )
          })
        }
      </main>

    </div>
  )
}

