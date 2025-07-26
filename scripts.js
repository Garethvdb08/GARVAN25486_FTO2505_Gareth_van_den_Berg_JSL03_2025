const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
];
// Tasks [title and status] to be stored as objects in an array in the console
console.log(`All tasks stored here: 🏆`, initialTasks);

//--------------------------------------------------------------------------------------------
// New Tasks (up to 3) added to the existing array at the top
for (let i = 0; i < 3; i++) {
  const title = prompt(`Enter task title:`);
  const description = prompt(`Enter task description:`);
  const status = prompt(`Enter task status:`);
  // To check if the user cancelled any of the prompts
  if (title !== null && description !== null && status !== null) {
    addNewTask(title, description, status);
  } else {
    alert("Task creation cancelled.");
    break; // Exit the loop if user cancels
  }
}
//----------------------------------------------------------------------
/* Function that adds the new tasks to the array
a unique id that increments from the lasting existing task */

function addNewTask(title, description, status) {
  //maps an array of all the ID's
  const arrayOfIds = initialTasks.map((obj) => obj.id);
  //Finds the higest number in the map
  const HighestNum = Math.max(...arrayOfIds);
  const highestId = HighestNum;
  // ------------- //
  // new task object with the incremeneted ID
  const newTask = {
    id: highestId + 1,
    title: title,
    description: description,
    status: status,
  };
  initialTasks.push(newTask);
}
//-------------------------------------------------------------------------------

// Filter the intialTask array to get only the status of "done"
const completeTasks = initialTasks.filter((task) => task.status === "done");
console.log(`Completed tasks:✅`, completeTasks);
