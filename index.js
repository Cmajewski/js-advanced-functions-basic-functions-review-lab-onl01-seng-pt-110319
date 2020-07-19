// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*"){
    return function(param="special"){
        return `You are ${flair}${param}${flair}!`
    }
};

const Calculator={
    add: function(x,y){
        return x+y
    },
    subtract: function(x,y){
        return x-y
    },
    multiply: function(x,y){
        return x*y
    },
    divide: function(x,y){
        return x/y
    }
}

function actionApplyer(start, fns) {
    for (let i = 0; i < fns.length; i++) {
      start = fns[i](start);
    }
    return start;
  }