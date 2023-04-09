import { Task } from "./task.js";
import { List } from "./list.js";
import { ListsController } from "./listsController.js";
// import './style.css';


const AppController = () => {
   const getListsFromStorage = () => {
      const lists = JSON.parse(localStorage.getItem('allLists'));
      console.log(lists);
      if (!lists || !lists.length) {
         return [List(
            'Todo List', '', false, []
         )];
      }
      let properLists = [];
      lists.forEach(list => {
         const properTasks = [];
         list.tasks.forEach(task => {
            properTasks.push(Task(
               task.title, 
               task.note,
               task.isImportant, 
               task.isDone));
         })
         properLists.
         push(List(
            list.title, 
            list.note, 
            list.isDone, 
            properTasks));
      })
      return(properLists);
   }

   const app = ListsController(getListsFromStorage());

   const main = document.createElement('main');
   main.setAttribute('id', 'app');

   const sidebar = document.createElement('div');
   sidebar.setAttribute('id', 'sidebar');

   const listContent = document.createElement('div');
   listContent.setAttribute('id', 'listContent');

   const rudder = document.createElement('div');
   rudder.setAttribute('id', 'rudder');

   const listsButton = document.createElement('button');
   listsButton.setAttribute('type', 'button');
   listsButton.classList.add('rudder-button-lists', 'rudder-button');
   listsButton.textContent = 'Lists';
   listsButton.addEventListener('click', () => {
      main.textContent = '';
      main.append(sidebar, rudder);
   })

   const tasksButton = document.createElement('button');
   tasksButton.setAttribute('type', 'button');
   tasksButton.classList.add('rudder-button-tasks', 'rudder-button');
   tasksButton.textContent = 'Tasks';
   tasksButton.addEventListener('click', () => {
      main.textContent = '';
      main.append(listContent, rudder);
   })

   rudder.append(listsButton, tasksButton);

   main.append(listContent, rudder);
   document.querySelector('body').append(main);

   const loadListContent = (listIndex) => {
      window.localStorage.setItem('allLists', JSON.stringify(app.allLists));
      listContent.textContent = '';

      const listHeader = document.createElement('div');
      listHeader.classList.add('list-header');
      const listTitle = document.createElement('h2');
      listTitle.textContent = app.allLists[listIndex].title;

      const settingsButton = document.createElement('button');
      settingsButton.setAttribute('type', 'button');
      settingsButton.classList.add('list-settings-button');
      const seetingsIcon = document.createElement('span');
      seetingsIcon.classList.add('material-icons', 'list-settings-icon');
      seetingsIcon.textContent = 'settings';

      settingsButton.addEventListener('click', () => {
         const popUpMenu = createPopUpMenu(app.allLists[listIndex].title);
         const listOfOptions = document.createElement('ul');

         const uncheckListOption = document.createElement('li');
         const uncheckListButton = createPopUpMenuButton();
         uncheckListButton.textContent = 'Uncheck all tasks';
         uncheckListButton.addEventListener('click', () => {
            app.allLists[listIndex].uncheckList();
            loadListContent(listIndex);
            closePopUpMenu();
         });
         uncheckListOption.append(uncheckListButton);

         const deleteAllTasksOption = document.createElement('li');
         const deleteAllTasksButton = createPopUpMenuButton();
         deleteAllTasksButton.textContent = 'Delete all tasks';
         deleteAllTasksButton.addEventListener('click', () => {
            app.allLists[listIndex].clearList();
            loadListContent(listIndex);
            closePopUpMenu();
         });
         deleteAllTasksOption.append(deleteAllTasksButton);

         const deleteListOption = document.createElement('li');
         const deleteListButton = createPopUpMenuButton();
         deleteListButton.textContent = 'Delete this list';
         deleteListButton.addEventListener('click', () => {
            app.allLists.splice(listIndex, 1);
            updateSidebar();
            closePopUpMenu();
            main.textContent = '';
            main.append(sidebar, rudder);
            if (app.allLists.length == 0) {
               tasksButton.disabled = true;
            }
         });
         deleteListOption.append(deleteListButton);

         listOfOptions.append(
            uncheckListOption, 
            deleteAllTasksOption, 
            deleteListOption);
         popUpMenu.append(listOfOptions);
         main.append(popUpMenu);
      })

      settingsButton.append(seetingsIcon);

      listHeader.append(listTitle, settingsButton);

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

         if (task.isImportant) {
            const importantIcon = document.createElement('span');
            importantIcon.classList.add('material-icons', 'task-star');
            importantIcon.textContent = 'star';
            importantIcon.addEventListener('click', () => {
               createFormForTask('editTaskForm', listIndex, task);
            })
            taskMain.appendChild(importantIcon);
         }

         const title = document.createElement('h3');
         title.textContent = task.title;
         title.classList.add('task-title');
         title.addEventListener('click', () => {
            createFormForTask('editTaskForm', listIndex, task);
         })
         taskMain.appendChild(title);

         const taskSetttingsButton = document.createElement('button');
         taskSetttingsButton.classList.add('task-settings-button');
         const taskSetttingsIcon = document.createElement('span');
         taskSetttingsIcon.classList.add('material-icons', 'task-settings-icon');
         taskSetttingsIcon.textContent = 'more_vert';
         taskSetttingsButton.addEventListener('click', () => {
            handleClickOnTaskSettings(listIndex, task);
         })
         taskSetttingsButton.append(taskSetttingsIcon);
         
         li.append(taskMain, taskSetttingsButton);

         if (task.note != '') {
            const note = document.createElement('p');
            note.classList.add('note');
            note.textContent = task.note;
            li.appendChild(note);
         }

         listTasks.append(li);
      })

      listContent.prepend(listHeader);
      listContent.append(listTasks);

      loadControlsforListContent(listIndex);
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

   const loadControlsforListContent = (listIndex) => {
      const controls = createControlsDiv();
      controls.append
      (
         createNewTaskButton(listIndex), 
         // createDeleteListButton(listIndex)
      );
      listContent.append(controls);
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

   const loadControlsforSidebar = () => {
      const controls = createControlsDiv();
      controls.append(createNewListButton());
      sidebar.append(controls);
   }

   const createControlsDiv = () => {
      const controls = document.createElement('div');
      controls.classList.add('controls');
      return controls;
   }

   const createNewTaskButton = (listIndex) => {
      const newTaskButton = document.createElement('button');
      newTaskButton.setAttribute('id', 'newTaskButton');
      newTaskButton.classList.add('controls-button');
      newTaskButton.setAttribute('type', 'button');
      newTaskButton.textContent = '+';
      newTaskButton.addEventListener('click', () => {
         const popUpMenu = createPopUpMenu('New task');
         popUpMenu.append(createFormForTask('addTask', listIndex));
         main.append(popUpMenu);
      });
      return newTaskButton;
   }

   const createNewListButton = () => {
      const newListButton = document.createElement('button');
      newListButton.setAttribute('id', 'newListButton');
      newListButton.classList.add('controls-button');
      newListButton.setAttribute('type', 'button');
      newListButton.textContent = '+';
      newListButton.addEventListener('click', () => {
         createFormForNewList();
      })
      return newListButton;
   }

   const createDeleteListButton = (listIndex) => {
      const deleteListButton = document.createElement('button');
      deleteListButton.setAttribute('id', 'deleteListButton');
      deleteListButton.classList.add('controls-button');
      deleteListButton.setAttribute('type', 'button');
      deleteListButton.textContent = 'Delete List';
      deleteListButton.addEventListener('click', () => {
         app.removeList(app.allLists[listIndex]);
         listContent.textContent = '';
         updateSidebar();
      });
      return deleteListButton;
   }

   const createFormForNewList = () => {
      closeAllForms();
      const addListForm = document.createElement('div');
      addListForm.setAttribute('id', 'addListForm');
      addListForm.classList.add('form');
      const form = document.createElement('form');
      const ul = document.createElement('ul');
      for (let i = 0; i < 1; i++) {
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
         }
         li.append(label, input);
         ul.append(li);
         
      }
      form.append(ul);
      
      const submitListButton = document.createElement('button');
      submitListButton.setAttribute('id', 'submit-task');
      submitListButton.setAttribute('type', 'button');
      submitListButton.textContent = 'Submit';
      submitListButton.addEventListener('click', () => {
         const title = document.getElementById('listTitle').value;
         console.log('title:' + title);
         app.addList(List(title, '', false, []));
         loadListContent(app.allLists.length - 1);
         updateSidebar();
         
      })
   
      addListForm.append(createCancelButton('addListForm'));
      form.append(submitListButton);
      addListForm.append(form);
      sidebar.append(addListForm);
   }
   
   const createCancelButton = (formId) => {
      const cancelTaskButton = document.createElement('button');
      cancelTaskButton.setAttribute('type', 'button');
      cancelTaskButton.classList.add('close-button');
      const cancelSpan = document.createElement('span');
      cancelSpan.classList.add('material-icons', 'md-36');
      cancelSpan.textContent = 'close';
      cancelTaskButton.append(cancelSpan);
      cancelTaskButton.addEventListener('click', () => {
         document.getElementById(formId).remove();
      })
      return cancelTaskButton;
   }
   
   const createSubmitTaskButton = (formId, listIndex, task) => {
      const submitTaskButton = document.createElement('button');
      submitTaskButton.setAttribute('id', 'submit-task');
      submitTaskButton.setAttribute('type', 'button');
      submitTaskButton.textContent = 'Submit';
      submitTaskButton.addEventListener('click', () => {
         console.log(`${formId}Title`);
         const title = document.getElementById(`${formId}Title`).value;
         const note = document.getElementById(`${formId}Note`).value;
         const isImportant = document.getElementById(`${formId}IsImportant`).checked;
         console.log('title:' + title);
         console.log('note:' + note);
         console.log('isImportant:' + isImportant);
         if (!task) {
            app.allLists[listIndex].addTask(Task(title, note, isImportant, false));
         } else {
            task.editTask(title, note, isImportant);
         }
         closePopUpMenu();
         loadListContent(listIndex);   
      });
   
      return submitTaskButton;
   }

   const makeButtonEditTask = (listIndex, task) => {

   }
   
   const makeButtonDeleteTask = (button, listIndex, task) => {
      button.addEventListener('click', () => {
         app.allLists[listIndex].deleteTask(task);
         loadListContent(listIndex);
         closePopUpMenu();
      })
   }
   
   const createFormForTask = (formId, listIndex, task) => {
      closeAllForms();
      const taskForm = document.createElement('div');
      taskForm.setAttribute('id', formId);
      taskForm.classList.add('form');
      const form = document.createElement('form');
      const ul = document.createElement('ul');
   
      for (let i = 0; i < 3; i++) {
         const li = document.createElement('li');
         const label = document.createElement('label');
         const input = document.createElement('input');
         switch (i) {
            case 0: 
               label.textContent = 'Name';
               label.setAttribute('for', `${formId}Title`);
               input.setAttribute('type', 'text');
               input.setAttribute('id', `${formId}Title`);
               if (task) input.value = task.title;
               break;
            case 1:
               label.textContent = 'Note';
               label.setAttribute('for', `${formId}Note`);
               input.setAttribute('type', 'text');
               input.setAttribute('id', `${formId}Note`);
               if (task) input.value = task.note;
               break;
            case 2:
               label.textContent = 'Important';
               label.setAttribute('for', `${formId}IsImportant`);
               input.setAttribute('type', 'checkbox');
               input.setAttribute('id', `${formId}IsImportant`);
               input.classList.add('form-checkbox');
               if (task) input.checked = task.isImportant;
               break;
         }
         li.append(label, input);
         ul.append(li);
      }
   
      form.append(ul);
   
      const formButtons = document.createElement('div');
      formButtons.classList.add('form-buttons');
      formButtons.append(createSubmitTaskButton(formId, listIndex, task));
   
      taskForm.append(form);
      taskForm.append(formButtons);
      return taskForm;
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

   const createPopUpMenuButton = () => {
      const popUpMenuButton = document.createElement('button');
      popUpMenuButton.classList.add('pop-up-menu-button');
      popUpMenuButton.setAttribute('type', 'button');
      return popUpMenuButton;
   }

   const createPopUpMenu = (menuTitle) => {
      if (document.getElementById('popUpMenu')) {
         closePopUpMenu();
      }
      const popUpMenu = document.createElement('div');
      popUpMenu.setAttribute('id', 'popUpMenu')
      const cancelButton = createCancelButton('popUpMenu');
      popUpMenu.append(cancelButton);
      const title = document.createElement('div');
      title.classList.add('item-title');
      title.textContent = menuTitle;
      popUpMenu.append(title);
      return popUpMenu;
   }

   const closePopUpMenu = () => {
      document.getElementById('popUpMenu').remove();
   }
   
   const handleClickOnTaskSettings = (listIndex, task) => {
      const popUpMenu = createPopUpMenu(task.title);
      const listOfOptions = document.createElement('ul');

      const editTaskOption = document.createElement('li');
      const editTaskButton = createPopUpMenuButton();
      editTaskButton.classList.add('edit-task-button');
      editTaskButton.textContent = 'Edit task';
      editTaskButton.addEventListener('click', () => {
         const popUpMenu = createPopUpMenu();
         popUpMenu.append(createFormForTask('editTask', listIndex, task));
         main.append(popUpMenu);
      });
      editTaskOption.append(editTaskButton);

      const deleteTaskOption = document.createElement('li');
      const deleteTaskButton = createPopUpMenuButton();
      deleteTaskButton.classList.add('delete-task-button');
      deleteTaskButton.textContent = 'Delete task';
      makeButtonDeleteTask(deleteTaskButton, listIndex, task);
      deleteTaskOption.append(deleteTaskButton);

      listOfOptions.append(editTaskOption, deleteTaskOption);
      popUpMenu.append(listOfOptions);
      main.append(popUpMenu);
   }

   updateSidebar();
   loadListContent(0);
}

AppController();