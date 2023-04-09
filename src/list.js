export const List = (title, note, isDone, tasks) => {
   const addTask = (task) => {
      if (task.title != '') {
         tasks.push(task);
      } else {
         console.log("Error! Empty title!");
      }
   }

   const deleteTask = (task) => {
      tasks.splice(tasks.indexOf(task), 1);
   }

   const uncheckList = () => {
      tasks.forEach(task => {
         task.isDone = false;
      });
   }

   const clearList = () => {
      tasks.length = 0;
   }

   let list = { title, note, isDone, tasks, addTask, deleteTask, uncheckList, clearList }

   return list;
}