function randomGenerator(tipArray) {
    let tipNum = tipArray.length - 1;
    let num = Math.round(Math.random() * tipNum);
    return tipArray[num];
}
  
let tips = [
    "Avoid eye strain by taking occasional breaks from the screen. Google the 20-20-20 rule.",
    "In order to prevent eye strain, your screen should be at least an arm's length away from your eyes.",
    "Be sure to clean your screen regularly. Smudges may reduce the contrast of your screen and create an irritating glare.",
    "Emails can be a distraction when you're occupied with a task that requires concentrarion. Set aside time specifically to check your emails.",
    "Chewing gum has been shown to speed up reaction time and improve cognitive abilities.",
    "The Pareto Principle is the idea that roughly 20 percent of your tasks generate an astounding 80 percent of significant outcomes.",
    "People tend to procrastinate when faced with large, complicated projects. You can alleviate this problem by breaking up large projects into smaller tasks.",
    "If you find yourself in a productivity rut, a change of setting might help. Try working in a coffee shop for a while.",
    "The practice known as mindfulness meditation has been show to reduce stress by conditioning you to focus on the present moment.",
]

//posture
//sleep
//mindfulness
//productivity methods