import './style.css';
import { project, toDo } from './task.js'
import { elementBuilder, projectBuilder, applyButtons, minView } from'./projectElements.js'

const homeProjects = project(
  "Home Projects",
  "Projects to do around the house."
);

const forYourHealth = project(
  "Stay Healthy",
  "Prolong your biological life through various routines!"
);

const carProject = project(
  "Automotive tasks",
  "Basic car maintenance!",
)

const toDoItem = toDo(
  `Make "To Do List" Application!`,
  homeProjects,
  "Create an application to manage daily tasks.",
  "9/15/2021",
  "2", 
  "This the first object created using the toDo factory function.",
)

const replaceWipers = toDo(
  "Replace Windshield Wipers",
  carProject,
  "My wipers are deteriorating...Dear god. It's time to replace them.",
  "10/6/21",
  "5",
  "Saw a deal at that place on 75th",
)

const changeOil = toDo(
  "Time for an Oil Change!",
  carProject,
  "Change the oil in your beautiful Mazda 2!",
  "9/28/2021",
  "3",
  "test note",
)

const goToDoc = toDo(
  "Go to your Doctor's Appointment!",
  forYourHealth,
  "It's time for a check up",
  "9/17/2021",
  "2",
  "Be sure to tell him about your back acne",
)

const getGift = toDo(
  `Get a Birthday Gift for the Wife!`,
  homeProjects,
  "No giftcards...",
  "9/18/2021",
  "1", 
  "No idea what to get her...",
)

const writeScript = toDo(
  "Write Script",
  homeProjects,
  `Finally write that movie script you've been talking about.`,
  "10/15/2021",
  "5", 
  "Be sure to include that twist ending where the guy was dead the whole time.",
)

const getTest = toDo(
  "Get Blood Test",
  forYourHealth,
  "Get that blood test your Doc ordered",
  "10/17/21",
  "1",
  "remember to fast 12 hours before. No eating!"
)

const firstList = [writeScript, getGift, toDoItem]
const secondList = [goToDoc, getTest]
const thirdList = [replaceWipers, changeOil]

let newProject = projectBuilder(firstList, homeProjects);
let secondProject = projectBuilder(secondList, forYourHealth);
let thirdProject = projectBuilder(thirdList, carProject);

let projectArray = [newProject, secondProject, thirdProject];
applyButtons(projectArray);