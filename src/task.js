

export const Task = (title, note, dueDate, isImportant, isDone) => {
   const toggleIsDone = () => {
      task.isDone = !task.isDone;
   }

   const editTask = (title, note, dueDate, isImportant) => {
      task.title = title;
      task.note = note;
      task.dueDate = dueDate;
      task.isImportant = isImportant;
   }

   let task = { title, note, dueDate, isImportant, isDone, toggleIsDone, editTask };
   return task;
}

