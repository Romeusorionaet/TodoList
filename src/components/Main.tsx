import { FaClipboardList } from 'react-icons/fa'

import { Task } from './Task'
import { TaskCount, TasksProps } from './TaskCount'

import styles from './Main.module.css'

interface TaskState {
    tasks: TasksProps[];
    setTasks: ( task: TasksProps[] ) => void;
}

export function Main({ tasks, setTasks }: TaskState ) {

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.id !== taskToDelete
        })
        setTasks(tasksWithoutDeleteOne)

        localStorage.setItem('@saveTodoTasksIgnite', 
        JSON.stringify(tasksWithoutDeleteOne))
    }

    function onCheck(id: string) {
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return {
              ...task,
              isComplete: !task.isComplete
            };
          } else {
            return task;
          }
        })
        setTasks(updatedTasks)
    }

    return(
        <main>
            <TaskCount newTask={tasks} />

            <div className={tasks.length !== 0 ? '' : styles.line}></div>

            {tasks.length !== 0 ?
                <div className={styles.tasks}>
                    {tasks.map(task => {
                        return(
                            <Task
                            key={task.id}
                            id={task.id}
                            text={task.text}
                            isComplete={task.isComplete}
                            onDeleteTask={deleteTask}
                            onCheck={onCheck}
                            />
                        )
                    })}
                </div>
                : 
                <div className={styles.empty_field}>
                    <FaClipboardList />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }
        </main>
    )
}