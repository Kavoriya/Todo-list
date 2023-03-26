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

   const loadListContent = (i) => {
      listContent.textContent = '';

      const listHeader = document.createElement('div');
      listHeader.classList.add('list-header');
      const listTitle = document.createElement('h2');
      listTitle.textContent = app.allLists[i].title;
      listHeader.append(listTitle);

      const tasks = app.allLists[i].tasks;
      const listTasks = document.createElement('div');
      listTasks.classList.add('listTasks');

      tasks.forEach(task => {
         const li = document.createElement('li');
         li.classList.add('task');
         const taskMain = document.createElement('div');
         taskMain.classList.add('task-main');

         const checkbox = document.createElement('input');
         checkbox.setAttribute('type', 'checkbox');
         if (task.isDone) {
            checkbox.checked = true;
         }
         taskMain.appendChild(checkbox);

         if (task.dueDate != '') { 
            const date = document.createElement('span');
            let dayAndMonth = `${task.dueDate.getDate()}. ${task.dueDate.getMonth()}`;
            date.textContent = dayAndMonth;
            taskMain.appendChild(date);
         }

         if (task.isImportant) {
            const importantIcon = document.createElement('span');
            importantIcon.textContent = 'star';
            taskMain.appendChild(importantIcon);
         }

         const title = document.createElement('h3');
         title.textContent = task.title;
         taskMain.appendChild(title);

         if (task.note != '') {
            const noteIcon = document.createElement('span');
            noteIcon.textContent = 'note';
            noteIcon.addEventListener('click', () => {
               handleClickOnNoteIcon(li, task);
            })
            taskMain.appendChild(noteIcon);
         }

         listContent.prepend(listHeader);

         li.append(taskMain);
         listTasks.append(li);
      })

      listContent.append(listTasks);

      loadControls();
   }

   const loadControls = () => {
      const controls = document.createElement('div');
      controls.classList.add('controls');
      const newTaskButton = document.createElement('button');
      newTaskButton.classList.add('new-task');
      newTaskButton.setAttribute('type', 'button');
      newTaskButton.textContent = 'New Task';
      controls.append(newTaskButton);
      listContent.append(controls);
   }

   const updateSidebar = () => {
      sidebar.textContent = '';
      for (let i = 0; i < app.allLists.length; i++) {
         const li = document.createElement('li');
         li.addEventListener('click', () => {
            loadListContent(i);
         });
         li.textContent = app.allLists[i].title;
         sidebar.append(li);
      }
   }

   const handleClickOnNoteIcon = (li, task) => {
      const element = li.querySelector('.note');
      if (task.note != '' && !element) {
         const note = document.createElement('p');
         note.classList.add('note');
         note.textContent = task.note;
         li.appendChild(note);
      } else if (element) {
         element.remove();
      }   
   }

   updateSidebar();
}

AppController();