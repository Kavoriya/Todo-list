import { Task } from "./task.js";
import { List } from "./list.js";

const defaultList = List('Todo List', '', '', false, false,
   [
   Task('Clean dishes', 'Using Fairy!', new Date('March 22, 2023 11:00:00'), false, false),
   Task('Check emails', '', new Date('March 24, 2023 11:00:00'), false, false),
   Task('Pet Lyolik', '', '', true, true),
   ]
);

const todayList = List('Assignment', '', '', false, false, 
   [
   Task('do homework', '', new Date('December 16, 1995 16:54:00'), true, false), 
   Task('make presentation', '', new Date('December 15, 1995 15:05:00'), true, false)
   ]
);

export { defaultList, todayList };