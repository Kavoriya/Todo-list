export const Task = (title, note, isImportant, isDone) => {
   const toggleIsDone = () => {
      task.isDone = !task.isDone;
   }

   const editTask = (title, note, isImportant) => {
      task.title = title;
      task.note = note;
      task.isImportant = isImportant;
   }

   let task = { title, note, isImportant, isDone, toggleIsDone, editTask };
   return task;
}

