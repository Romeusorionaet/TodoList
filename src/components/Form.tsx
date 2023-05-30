import { ChangeEvent, FormEvent } from "react";
import styles from './Form.module.css'

interface FormProps {
    handleTask: (event: ChangeEvent<HTMLInputElement>) => void;
    handleNewTask: (event: FormEvent) => void;
    newTask: string;
}

export function Form({ handleNewTask, handleTask, newTask }: FormProps) {
    return(
        <form className={styles.form} onSubmit={handleNewTask}>
            <input 
            className={styles.input}
            placeholder='Adicione uma nova tarefa'
            value={newTask} 
            required 
            type='text' 
            onChange={handleTask}
            />
            <button type='submit'>Criar</button>
        </form>
    )
}