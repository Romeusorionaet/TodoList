function onTeste(uid: string) {
    const tasksComplete = newTask.forEach(item => {

      if(item.id === uid){
        if(item.isComplete === false){
          return item.isComplete = true
        }else{
          return item.isComplete = false
        }
      }else{
        return
      }

    })
    setNewTask(tasksComplete)
  }