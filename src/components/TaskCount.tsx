import styles from './TaskCount.module.css'

export interface TasksProps {
    id: string;
    text: string;
    isComplete: boolean;
}

interface PropsCount {
    newTask: TasksProps[];
}

export function TaskCount( { newTask }: PropsCount ) {

    const taskCompleted  = newTask.reduce((accumulator, task) => {
      localStorage.setItem('@saveTodoTasksIgnite', JSON.stringify(newTask))

      if (task.isComplete) {
        return accumulator + 1;
      } else {
        return accumulator;
      }
      
    }, 0)
        
    return(
        <div className={styles.task_control}>
          <p>Tarefas criadas <span>{ newTask.length }</span> </p>
          <p>Concluídas <span>{`${ taskCompleted } de ${ newTask.length }`}</span> </p>
        </div>
    )
}