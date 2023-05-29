import styles from './Task.module.css'
import { useState, MouseEvent } from 'react'
import { BsCheckCircleFill, BsCircle } from 'react-icons/bs'

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

    function handleCheckbox(event: MouseEvent<HTMLButtonElement>) {
        if(event.type === 'click') {
            if(checkCurrent === false){
                setCheckCurrent(true)
                onCheck(id)
            }else{
                setCheckCurrent(false)
                onCheck(id)
            }
        }
    }

    return(
        <div className={styles.task}>
            <button 
            className='button_checkbox'
            value='true' 
            onClick={handleCheckbox}
            >
                {isComplete ? <BsCheckCircleFill size={20} /> : <BsCircle size={20} />}
            </button>

            <p className={checkCurrent === true ? styles.textChecked : styles.text}>{text}</p>

            <button onClick={handleDeleteTask}>deletar</button>
        </div>
    )
}