import { Task } from "./task.js";
import { List } from "./list.js";

const defaultList = List('Todo List', '', false,
   [
   Task('Clean dishes', 'Using Fairy!', false, false),
   Task('Check emails', '',false, false),
   Task('Pet Lyolik', '', true, true),
   ]
);

const todayList = List('Assignment', '', '', false, false, 
   [
   Task('do homework', '', true, false), 
   Task('make presentation', '', true, false)
   ]
);

export { defaultList, todayList };