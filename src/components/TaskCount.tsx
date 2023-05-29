import styles from './TaskCount.module.css'

interface TasksProps {
    id: string;
    text: string;
    isComplete: boolean;
}

interface PropsCount {
    newTask: TasksProps[];
}

export function TaskCount( { newTask }: PropsCount ) {
    return(
        <div className={styles.task_control}>
          <p>Tarefas criadas <span>{ newTask.length }</span> </p>
          <p>Concluídas <span>0</span> </p>
        </div>
    )
}