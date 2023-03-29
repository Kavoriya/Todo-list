import { Task } from "./task.js";
import { List } from "./list.js";
import { defaultList, todayList } from "./defaultLists.js";
import { ListsController } from "./listsController.js";


const AppController = () => {
   const getListsFromStorage = () => {
      const lists = JSON.parse(localStorage.getItem('allLists'));
      console.log(lists);
      if (!lists || !lists.length) {
         return [List(
            'Todo List', '', '', false, false, []
         )];
      }
      let properLists = [];
      lists.forEach(list => {
         const properTasks = [];
         list.tasks.forEach(task => {
            let fixedDate = '';
            if (task.dueDate) {
               fixedDate = new Date(task.dueDate);
            } else {
               fixedDate = '';
            }
            properTasks.push(Task(
               task.title, 
               task.note, 
               fixedDate, 
               task.isImportant, 
               task.isDone));
         })
         properLists.
         push(List(
            list.title, 
            list.note, 
            new Date(list.dueDate), 
            list.isImportant, 
            list.isDone, 
            properTasks));
      })
      return(properLists);
   }

   const app = ListsController(getListsFromStorage());

   const sidebar = document.getElementById('sidebar');
   const listContent = document.getElementById('listContent');

   const loadListContent = (listIndex) => {
      window.localStorage.setItem('allLists', JSON.stringify(app.allLists));
      listContent.textContent = '';

      const listHeader = document.createElement('div');
      listHeader.classList.add('list-header');
      const listTitle = document.createElement('h2');
      listTitle.textContent = app.allLists[listIndex].title;
      listHeader.append(listTitle);

      const listTasks = document.createElement('div');
      listTasks.classList.add('list-tasks');
      const tasks = app.allLists[listIndex].tasks;
      
      tasks.forEach(task => {
         const li = document.createElement('li');
         li.classList.add('task');
         const taskMain = document.createElement('div');
         taskMain.classList.add('task-main');

         const checkbox = document.createElement('input');
         checkbox.classList.add('task-checkbox');
         checkbox.setAttribute('type', 'checkbox');
         if (task.isDone) {
            checkbox.checked = true;
         }
         checkbox.addEventListener('click', () => {
            task.toggleIsDone();
            loadListContent(listIndex);
         });
         taskMain.appendChild(checkbox);

         if (task.dueDate) { 
            console.log(task.dueDate);
            const date = document.createElement('span');
            date.classList.add('task-date');
            let dayAndMonth = 
            `${task.dueDate.getDate()}. ${task.dueDate.toLocaleString('default', {month: 'short'})}`;
            date.textContent = dayAndMonth;
            date.addEventListener('click', () => {
               createFormForEditingTask(listIndex, task);
            })
            taskMain.appendChild(date);
         } else {
            taskMain.classList.add('task-main-dateless')
         }

         if (task.isImportant) {
            const importantIcon = document.createElement('span');
            importantIcon.classList.add('material-icons', 'task-star');
            importantIcon.textContent = 'star';
            importantIcon.addEventListener('click', () => {
               createFormForEditingTask(listIndex, task);
            })
            taskMain.appendChild(importantIcon);
         }

         const title = document.createElement('h3');
         title.textContent = task.title;
         title.classList.add('task-title');
         title.addEventListener('click', () => {
            createFormForEditingTask(listIndex, task);
         })
         taskMain.appendChild(title);

         if (task.note != '') {
            const noteIcon = document.createElement('span');
            noteIcon.classList.add('material-icons', 'task-note');
            noteIcon.textContent = 'description';
            noteIcon.addEventListener('click', () => {
               handleClickOnNoteIcon(li, task);
            })
            taskMain.appendChild(noteIcon);
         }

         li.append(taskMain);
         listTasks.append(li);
      })

      listContent.prepend(listHeader);
      listContent.append(listTasks);

      loadControlsforListContent(listIndex);
   }

   const loadControlsforListContent = (listIndex) => {
      const controls = document.createElement('div');
      controls.classList.add('controls');

      const newTaskButton = document.createElement('button');
      newTaskButton.setAttribute('id', 'newTaskButton');
      newTaskButton.setAttribute('type', 'button');
      newTaskButton.textContent = 'New Task';
      newTaskButton.addEventListener('click', () => {
         createFormForNewTask(listIndex)
      });

      const deleteListButton = document.createElement('button');
      deleteListButton.setAttribute('id', 'deleteListButton');
      deleteListButton.setAttribute('type', 'button');
      deleteListButton.textContent = 'Delete List';
      deleteListButton.addEventListener('click', () => {
         app.removeList(app.allLists[listIndex]);
         listContent.textContent = '';
         updateSidebar();
      })

      controls.append(newTaskButton, deleteListButton);
      listContent.append(controls);
   }

   const loadControlsforSidebar = () => {
      const controls = document.createElement('div');
      controls.classList.add('controls');

      const newListButton = document.createElement('button');
      newListButton.setAttribute('id', 'newListButton');
      newListButton.setAttribute('type', 'button');
      newListButton.textContent = 'New List';
      newListButton.addEventListener('click', () => {
         createFormForNewList();
      })

      controls.append(newListButton);
      sidebar.append(controls);
   }

   const updateSidebar = () => {
      window.localStorage.setItem('allLists', JSON.stringify(app.allLists));
      sidebar.textContent = '';
      const lists = document.createElement('div');
      lists.classList.add('lists');
      app.allLists.forEach(list => {
         const li = document.createElement('li');
         li.addEventListener('click', () => {
            loadListContent(app.allLists.indexOf(list));
         });
         li.textContent = list.title;
         lists.append(li);
      })
      sidebar.append(lists);
      loadControlsforSidebar();
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

   const createFormForNewTask = (listIndex) => {
      closeAllForms();
      const addTaskForm = document.createElement('div');
      addTaskForm.setAttribute('id', 'addTaskForm');
      const form = document.createElement('form');
      const ul = document.createElement('ul');
      for (let i = 0; i < 4; i++) {
         const li = document.createElement('li');
         const label = document.createElement('label');
         const input = document.createElement('input');
         switch (i) {
            case 0: 
               label.textContent = 'Name';
               label.setAttribute('for', 'title');
               input.setAttribute('type', 'text');
               input.setAttribute('id', 'title');
               break;
            case 1:
               label.textContent = 'Due date';
               label.setAttribute('for', 'date');
               input.setAttribute('type', 'date');
               input.setAttribute('id', 'date');
               break;
            case 2:
               label.textContent = 'Note';
               label.setAttribute('for', 'note');
               input.setAttribute('type', 'text');
               input.setAttribute('id', 'note');
               break;
            case 3:
               label.textContent = 'Important';
               label.setAttribute('for', 'isImportant');
               input.setAttribute('type', 'checkbox');
               input.setAttribute('id', 'isImportant');
               break;
         }
         li.append(label, input);
         ul.append(li);
         
      }
      form.append(ul);
      
      const cancelTaskButton = document.createElement('button');
      cancelTaskButton.setAttribute('id', 'cancel-task');
      cancelTaskButton.setAttribute('type', 'button');
      cancelTaskButton.textContent = 'Cancel';
      cancelTaskButton.addEventListener('click', () => {
         document.getElementById('addTaskForm').remove();
      })

      const submitTaskButton = document.createElement('button');
      submitTaskButton.setAttribute('id', 'submit-task');
      submitTaskButton.setAttribute('type', 'button');
      submitTaskButton.textContent = 'Submit';
      submitTaskButton.addEventListener('click', () => {
         const title = document.getElementById('title').value;
         const date = document.getElementById('date').value;
         let dueDate;
         if (date != '') {
            dueDate = new Date(date);
         } else {
            dueDate = '';
         }
      
         const note = document.getElementById('note').value;
         const isImportant = document.getElementById('isImportant').checked;
         console.log('title:' + title);
         console.log('date:' + date);
         console.log('dueDate:' + dueDate);
         console.log('note:' + note);
         console.log('isImportant:' + isImportant);
         app.allLists[listIndex].addTask(Task(title, note, dueDate, isImportant, false));
         loadListContent(listIndex);
         
      })
      addTaskForm.append(cancelTaskButton);
      form.append(submitTaskButton);
      addTaskForm.append(form);
      listContent.append(addTaskForm);
   }

   const createFormForNewList = () => {
      closeAllForms();
      const addListForm = document.createElement('div');
      addListForm.setAttribute('id', 'addListForm');
      const form = document.createElement('form');
      const ul = document.createElement('ul');
      for (let i = 0; i < 4; i++) {
         const li = document.createElement('li');
         const label = document.createElement('label');
         const input = document.createElement('input');
         switch (i) {
            case 0: 
               label.textContent = 'Name';
               label.setAttribute('for', 'listTitle');
               input.setAttribute('type', 'text');
               input.setAttribute('id', 'listTitle');
               break;
            case 1:
               label.textContent = 'Due date';
               label.setAttribute('for', 'listDate');
               input.setAttribute('type', 'date');
               input.setAttribute('id', 'listDate');
               break;
            case 2:
               label.textContent = 'Note';
               label.setAttribute('for', 'listNote');
               input.setAttribute('type', 'text');
               input.setAttribute('id', 'listNote');
               break;
            case 3:
               label.textContent = 'Important';
               label.setAttribute('for', 'listIsImportant');
               input.setAttribute('type', 'checkbox');
               input.setAttribute('id', 'listIsImportant');
               break;
         }
         li.append(label, input);
         ul.append(li);
         
      }
      form.append(ul);
      
      const cancelListButton = document.createElement('button');
      cancelListButton.setAttribute('id', 'cancel-task');
      cancelListButton.setAttribute('type', 'button');
      cancelListButton.textContent = 'Cancel';
      cancelListButton.addEventListener('click', () => {
         document.getElementById('addListForm').remove();
      })

      const submitListButton = document.createElement('button');
      submitListButton.setAttribute('id', 'submit-task');
      submitListButton.setAttribute('type', 'button');
      submitListButton.textContent = 'Submit';
      submitListButton.addEventListener('click', () => {
         const title = document.getElementById('listTitle').value;
         const date = document.getElementById('listDate').value;
         let dueDate;
         if (date != '') {
            dueDate = new Date(date);
         } else {
            dueDate = '';
         }
      
         const note = document.getElementById('listNote').value;
         const isImportant = document.getElementById('listIsImportant').checked;
         console.log('title:' + title);
         console.log('date:' + date);
         console.log('dueDate:' + dueDate);
         console.log('note:' + note);
         console.log('isImportant:' + isImportant);
         app.addList(List(title, note, dueDate, isImportant, false, []));
         loadListContent(app.allLists.length - 1);
         updateSidebar();
         
      })

      addListForm.append(cancelListButton);
      form.append(submitListButton);
      addListForm.append(form);
      sidebar.append(addListForm);
   }

   const createFormForEditingTask = (listIndex, task) => {
      closeAllForms();
      const editTaskForm = document.createElement('div');
      editTaskForm.setAttribute('id', 'editTaskForm');
      const form = document.createElement('form');
      const ul = document.createElement('ul');
      for (let i = 0; i < 4; i++) {
         const li = document.createElement('li');
         const label = document.createElement('label');
         const input = document.createElement('input');
         switch (i) {
            case 0: 
               label.textContent = 'Name';
               label.setAttribute('for', 'editTitle');
               input.setAttribute('type', 'text');
               input.setAttribute('id', 'editTitle');
               input.value = task.title;
               break;
            case 1:
               label.textContent = 'Due date';
               label.setAttribute('for', 'editDate');
               input.setAttribute('type', 'date');
               input.setAttribute('id', 'editDate');
               if (task.dueDate) input.valueAsDate = task.dueDate;    
               break;
            case 2:
               label.textContent = 'Note';
               label.setAttribute('for', 'editNote');
               input.setAttribute('type', 'text');
               input.setAttribute('id', 'editNote');
               input.value = task.note;
               break;
            case 3:
               label.textContent = 'Important';
               label.setAttribute('for', 'editIsImportant');
               input.setAttribute('type', 'checkbox');
               input.setAttribute('id', 'editIsImportant');
               input.checked = task.isImportant;
               break;
         }
         li.append(label, input);
         ul.append(li);
         
      }
      form.append(ul);
      
      const cancelTaskButton = document.createElement('button');
      cancelTaskButton.setAttribute('id', 'cancel-task');
      cancelTaskButton.setAttribute('type', 'button');
      cancelTaskButton.textContent = 'Cancel';
      cancelTaskButton.addEventListener('click', () => {
         document.getElementById('editTaskForm').remove();
      })

      const submitTaskButton = document.createElement('button');
      submitTaskButton.setAttribute('id', 'submit-task');
      submitTaskButton.setAttribute('type', 'button');
      submitTaskButton.textContent = 'Submit';
      submitTaskButton.addEventListener('click', () => {
         const title = document.getElementById('editTitle').value;
         const date = document.getElementById('editDate').value;
         let dueDate;
         if (date) {
            dueDate = new Date(date);
         } else {
            dueDate = '';
         }
         const note = document.getElementById('editNote').value;
         const isImportant = document.getElementById('editIsImportant').checked;
         console.log('title:' + title);
         console.log('date:' + date);
         console.log('dueDate:' + dueDate);
         console.log('note:' + note);
         console.log('isImportant:' + isImportant);
         task.editTask(title, note, dueDate, isImportant);
         loadListContent(listIndex);    
      })

      const deleteTaskButton = document.createElement('button');
      deleteTaskButton.setAttribute('id', 'delete-task');
      deleteTaskButton.setAttribute('type', 'button');
      deleteTaskButton.textContent = 'Delete';
      deleteTaskButton.addEventListener('click', () => {
         app.allLists[listIndex].deleteTask(task);
         loadListContent(listIndex); 
      })

      editTaskForm.append(cancelTaskButton);
      form.append(deleteTaskButton, submitTaskButton);
      editTaskForm.append(form);
      listContent.append(editTaskForm);
   }

   const closeAllForms = () => {
      if (document.getElementById('addTaskForm')) {
         document.getElementById('addTaskForm').remove();
      }
      if (document.getElementById('editTaskForm')) {
         document.getElementById('editTaskForm').remove();
      }
      if (document.getElementById('addListForm')) {
         document.getElementById('addListForm').remove();
      }
   }

   updateSidebar();
   loadListContent(0);
}

AppController();