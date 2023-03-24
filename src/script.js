const Task = (title, note, dueDate, isImportant, isDone) => {
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

const List = (title, note, dueDate, isImportant, isDone, tasks) => {
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

const defaultList = List('Todo List', '', '', false, false,
   [
   Task('Clean dishes', 'Using Fairy!', new Date('March 23, 2023'), false, false),
   Task('Check emails', '', new Date('March 24 2023'), false, false),
   Task('Pet Lyolik', '', '', true, true),
   ]
);

// const todayList = List('Finish assignment', '', '', false, false, 
//    [
//    Task('do homework', '', new Date('December 16, 1995 16:54:00'), true, false), 
//    Task('make presentation', '', new Date('December 15, 1995 15:05:00'), true, false)
//    ]
// );

const ListsController = () => {
   const allLists = [];

   const addList = (list) => {
      if (list.title != '') {
         allLists.push(list);
      } else {
         console.log("Error! Empty title!");
      }
   }

   const removeList = (list) => {
      allLists.splice(allLists.indexOf(list), 1);
   }

   return { addList, removeList, allLists };
}
