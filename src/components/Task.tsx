import styles from './Task.module.css'
import { useState, MouseEvent } from 'react'

interface TaskProps {
    id: string;
    text: string;
    isComplete: boolean;
    onDeleteTask: (task: string) => void;
    onCheck: (task: string) => void;
}

export function Task({ id, text, isComplete, onDeleteTask, onCheck }: TaskProps) {
    const [checkCurrent, setCheckCurrent] = useState<boolean>(isComplete)

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckbox(event: MouseEvent<HTMLInputElement>) {
        setCheckCurrent(event.currentTarget.checked)
        onCheck(id)
    }

    return(
        <div className={styles.task}>
            <input type='checkbox' value='true' onClick={handleCheckbox}/>

            <p className={checkCurrent === true ? styles.textChecked : styles.text}>{text}</p>

            <button onClick={handleDeleteTask}>deletar</button>
        </div>
    )
}