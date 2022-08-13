const saturdayFun = (arg = 'roller-skate') => {
    return `This Saturday, I want to ${arg}!`;
}

const mondayWork = (activity = 'go to the office') => {
    return `This Monday, I will ${activity}.`;
}

const wrapAdjective = (string = '*') => (param1 = 'special')=> `You are ${string}${param1}${string}!`;

// console.log(wrapAdjective());

// const wrapAdjective = (string = '*') => {
//     return function name(param1 = 'special') {
       
//         return `You are ${string}${param1}${string}!`
//     }
// }