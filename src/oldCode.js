const createFormForNewTask = (listIndex) => {
   closeAllForms();
   const addTaskForm = document.createElement('div');
   addTaskForm.setAttribute('id', 'addTaskForm');
   addTaskForm.classList.add('form');
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
   cancelTaskButton.classList.add('close-button');
   const cancelSpan = document.createElement('span');
   cancelSpan.classList.add('material-icons', 'md-36');
   cancelSpan.textContent = 'close';
   cancelTaskButton.append(cancelSpan);
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

const createFormForEditingTask = (listIndex, task) => {
   closeAllForms();
   const editTaskForm = document.createElement('div');
   editTaskForm.setAttribute('id', 'editTaskForm');
   editTaskForm.classList.add('form');
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
   cancelTaskButton.classList.add('close-button');
   const cancelSpan = document.createElement('span');
   cancelSpan.classList.add('material-icons', 'md-36');
   cancelSpan.textContent = 'close';
   cancelTaskButton.append(cancelSpan);
   cancelTaskButton.addEventListener('click', () => {
      document.getElementById('editTaskForm').remove();
   })

   const formButtons = document.createElement('div');
   formButtons.classList.add('form-buttons');

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

   formButtons.append(submitTaskButton, deleteTaskButton);

   editTaskForm.append(cancelTaskButton);
   editTaskForm.append(form);
   editTaskForm.append(formButtons);
   listContent.append(editTaskForm);
}