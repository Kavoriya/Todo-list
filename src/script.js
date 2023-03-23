const Task = (title, description, dueDate, isImportant) => {
   return { title, description, dueDate, isImportant };
}

const Project = (title, description, dueDate, isImportant, tasks) => {
   const prototype = Task(title, description, dueDate, isImportant);
   return Object.assign({}, prototype, {tasks});
}

let project = Project("Finish assignment", "I can do it", new Date('December 17, 1995 03:24:00'), true, 
[Task('do homework', '', new Date('December 16, 1995 16:54:00'), true), Task('make presentation', '', new Date('December 15, 1995 15:05:00'), true)]
);