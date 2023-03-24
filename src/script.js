const Task = (title, note, dueDate, isImportant, isDone) => {
   const toggleIsDone = () => {
      task.isDone = !task.isDone;
   }

   let task = { title, note, dueDate, isImportant, isDone, toggleIsDone };
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

   const uncheckList = () => {
      tasks.forEach(task => {
         task.isDone = false;
      });
   }

   return Object.assign({}, prototype, {tasks}, {addTask, uncheckList});
}

const defaultList = List('Todo List', '', '', false, false,
   [
   Task('Clean dishes', 'Using Fairy!', new Date('March 23, 2023'), false, false),
   Task('Check emails', '', new Date('March 24 2023'), false, false),
   Task('Pet Lyolik', '', '', true, true),
   ]
);

const homeWork = List('Finish assignment', 'I can do it', new Date('December 17, 1995 03:24:00'), true, false, 
   [
   Task('do homework', '', new Date('December 16, 1995 16:54:00'), true, false), 
   Task('make presentation', '', new Date('December 15, 1995 15:05:00'), true, false)
   ]
);



