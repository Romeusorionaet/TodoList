import { Task } from './Task'
import { TaskCount, TasksProps } from './TaskCount'

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
            {
                tasks.length !== 0 ?
                <>
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

                </>
                : 
                <p>clean</p>
            }
        </main>
    )
}