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
// Function that handels task creation
// to track if the user has already run the task creation process
let hasAttemptedTaskCreation = false;

function taskCreation() {
  //First, check if the user has already tried to add tasks.
  if (hasAttemptedTaskCreation) {
    alert(
      "There are enough tasks on your board, please check them in the console"
    );
    return; // Exit the funciton immediately
  }

  // New task (up to 3) added to the existing array at the top
  for (let i = 0; i < 3; i++) {
    const title = prompt(`Enter task title:`);
    const description = prompt(`Enter task description`);
    const status = prompt(`Enter task status:`);
    // To check if the user cancelled any of the prompts
    if (title !== null && description !== null && status !== null) {
      addNewTask(title, description, status);
    } else {
      alert("Task creation cancelled.");
      break; // Exit the loop if user cancels
    }
  }
  //After the loop is finished or broken
  hasAttemptedTaskCreation = true;
}
//----------------------------------------------------------------------
/* Function that adds the new tasks to the array
a unique id that increments from the lasting existing task */

function addNewTask(title, description, status) {
  //maps an array of all the ID's
  const arrayOfIds = initialTasks.map((obj) => obj.id);
  //Finds the higest number in the map
  const highestId = initialTasks.length > 0 ? Math.max(...arrayOfIds) : 0;
  // ------------- //
  // new task object with the incremeneted ID
  const newTask = {
    id: highestId + 1,
    title,
    description,
    status,
  };
  initialTasks.push(newTask);
}
//-------------------------------------------------------------------------------

// Filter the intialTask array to get only the status of "done"
const completeTasks = initialTasks.filter((task) => task.status === "done");
// Event listener setup
const addTaskButton = document.getElementById("add-task-btn");
// Add a click event listener to the button.
// This will run the taskCreation function every time the button is clicked
addTaskButton.addEventListener("click", taskCreation);
// -------------------------------------------------------------------------------
/*  Log current state of the Board
---------------------------------------------------------------------------- */
console.log("--- Task Board State Updated ---");
console.log(`Completed Tasks: ✅`, completeTasks);
console.log(`All tasks stored here:🏆`, initialTasks);
