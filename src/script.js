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

const todayList = List('Assignment', '', '', false, false, 
   [
   Task('do homework', '', new Date('December 16, 1995 16:54:00'), true, false), 
   Task('make presentation', '', new Date('December 15, 1995 15:05:00'), true, false)
   ]
);

const ListsController = (listsArray = []) => {
   const allLists = [];
   listsArray.forEach(list => {
      allLists.push(list);
   });

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

const AppController = () => {
   const app = ListsController([defaultList, todayList]);

   const sidebar = document.getElementById('sidebar');
   const listContent = document.getElementById('listContent');

   const loadList = (i) => {
      listContent.textContent = '';
      const header = document.createElement('h2');
      header.textContent = app.allLists[i].title;
      const tasks = app.allLists[i].tasks;
      tasks.forEach(task => {
         const li = document.createElement('li');
         li.classList.add('task');
         const checkbox = document.createElement('input');
         checkbox.setAttribute('type', 'checkbox');
         const date = document.createElement('span');
         if (task.dueDate != '') { 
            let dayAndMonth = `${task.dueDate.getDate()}. ${task.dueDate.getMonth()}`;
            date.textContent = dayAndMonth;
         }
         const title = document.createElement('h3');
         title.textContent = task.title;

         li.append(checkbox, date, title);
         listContent.prepend(header);
         listContent.append(li);
      })
   }

   const updateSidebar = () => {
      sidebar.textContent = '';
      for (let i = 0; i < app.allLists.length; i++) {
         const li = document.createElement('li');
         li.addEventListener('click', () => {
            loadList(i);
         });
         li.textContent = app.allLists[i].title;
         sidebar.append(li);
      }
   }

   updateSidebar();
}

AppController();