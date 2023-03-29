export const ListsController = (listsArray = []) => {
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