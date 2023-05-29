import styles from './Task.module.css'
import { useState, MouseEvent } from 'react'

interface TaskProps {
    id: string;
    text: string;
    onDeleteTask: (task: string) => void;
}

export function Task({ id, text, onDeleteTask }: TaskProps) {
    const [checkCurrent, setCheckCurrent] = useState<boolean>(false)

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheckbox(event: MouseEvent<HTMLInputElement>) {
        setCheckCurrent(event.currentTarget.checked)
    }

    return(
        <div className={styles.task}>
            <input type='checkbox' onClick={handleCheckbox}/>

            <p className={checkCurrent === true ? styles.textChecked : styles.text}>{text}</p>

            <button onClick={handleDeleteTask}>deletar</button>
        </div>
    )
}