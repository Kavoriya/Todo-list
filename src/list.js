import { Task } from './task.js';

export const List = (title, note, dueDate, isImportant, isDone, tasks) => {
   const prototype = Task(title, note, dueDate, isImportant, isDone);

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
      tasks.forEach(task => {
         tasks.shift();
      });
   }

   return Object.assign({}, prototype, {tasks}, {addTask, deleteTask, uncheckList, clearList});
}