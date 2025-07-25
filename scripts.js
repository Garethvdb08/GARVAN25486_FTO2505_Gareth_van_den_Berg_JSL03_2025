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
console.log(initialTasks);

// New Tasks (up to 3) added to the existing array at the top
const newTasks = [
  {
    id: 4,
    title: "Rugby Practice",
    description: "Go to rugby practice",
    status: "todo",
  },
  {
    id: 5,
    title: "Music Session",
    description: "Listen to lastest releases of my favourite artists",
    status: "doing",
  },
  {
    id: 6,
    title: "Coding Challenge",
    description: "Html, CSS and JavaScript Revision",
    status: "done",
  },
];

// Pushes the new tasks into the existing array
initialTasks.push(...newTasks); // "..."(spread syntax), takes array spread or unpack its individual elements

// Each new task has a unique id that increments from the lasting existing task
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
/*if i were to use the new function: 
-----------------------------------------------
addNewTask("Tiktoks", "Watch tiktok all day", "doing");
addNewTask"Workout", "Go to the gym and workout", "done");
--------------------------------------------------------------
*/
console.log(initialTasks);
