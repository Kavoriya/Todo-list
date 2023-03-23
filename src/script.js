const Task = (title, note, dueDate, isImportant) => {
   return { title, note, dueDate, isImportant };
}

const Project = (title, note, dueDate, isImportant, tasks) => {
   const prototype = Task(title, note, dueDate, isImportant);
   return Object.assign({}, prototype, {tasks});
}

let project = Project("Finish assignment", "I can do it", new Date('December 17, 1995 03:24:00'), true, 
[Task('do homework', '', new Date('December 16, 1995 16:54:00'), true), Task('make presentation', '', new Date('December 15, 1995 15:05:00'), true)]
);