function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}



function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}


function wrapAdjective(flair = '*') {
    const innerFunction = function (unique = "special") {
        return `You are ${flair}${unique}${flair}!`
    }

    return innerFunction;
  }




//   It should return a function. This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
// It should take as parameter a String that will be used to create visual flair.
// You may call the parameter whatever you like, but its default value should be "*".
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")