// importing libraries
var readLine = require("readline-sync");
var chalk = require("chalk");

// taking UserName
var userName = readLine.question(chalk.bold("What is your Name?  "));
console.log("\nhi "+chalk.red.bold(userName.toUpperCase())+", let's see how much you know about India!\n\n");

// Rules
console.log(chalk.red.bold("Rules: "));
console.log(chalk.bgBlue("1. There are a total of 5 questions. All are compulsory."));
console.log(chalk.bgBlue("2. Each right answer will give you 1 points."));
console.log(chalk.bgBlue("3. No points will be deducted for any wrong answers.\n\n"));
var score = 0;

// Quiz Data
var quizQuestion = [
  {
    question: "What body of water lies to the west of India?",
    options: ["Arabian Sea","Coral Sea","Celebes Sea","Andaman Sea"],
    answer: "Arabian Sea"
  },
  {
    question: "Which town in Nagaland was WWII fought?",
    options: ["Dimapur","Phek","Kohima","Wokha"],
    answer: "Kohima"
  },
  {
    question: "When did Radio broadcasting begin in India?",
    options: ["1930","1957","1927","1936"],
    answer: "1927"
  },
  {
    question: "Which of these is a union territory of India?",
    options: ["Chennai","Shimla","Kolkatta","Ladakh"],
    answer: "Ladakh",
  },
  {
    question: "Which Indian cricketer became the first sportsman to be awarded the Bharat Ratna, India's highest civilian order?",
    options: ["Sunil Gavaskar","Sachin Tendulkar","Kapil Dev","Mahendra Singh Dhoni"],
    answer: "Sachin Tendulkar"
  },
  
];

// function to play
function play(ques){
  for(var i=0;i<ques.length;i++){
    console.log(chalk.yellow("QUESTION: ",i+1));
    console.log(chalk.yellow(ques[i].question));

    var index = readLine.keyInSelect(ques[i].options, chalk.blue("select one option : "), {cancel: false, guide: false});
    chalk.blue(index);

    if(ques[i].answer === ques[i].options[index]){
      console.log(chalk.blue("CORRECT"));
      score++;
    }
    else{
      console.log(chalk.blue("INCORRECT"));;
      score = score;
      console.log(chalk.blue("Correct Answer is "+ques[i].options[index]));
    }
     console.log(chalk.red.bold("-----------------------------------\n"));
  }
}

play(quizQuestion);


// ScoreBoards
var topScores = [
  {
    name: "Harshit",
    score: 5
  },
  {
    name: "Akash",
    score: 3
  },
  
];

// Comparing Scores
if (score > topScores[0].score) {
    console.log(chalk.cyanBright("Hurray! you have beaten our top scorer ("+ topScores[0].name+") with a score of 5."));
  } 
  else if (score > topScores[1].score) {
      console.log(chalk.cyanBright("Yayy! You have beaten up our 2nd top scorer("+ topScores[1].name+") with score "+ score + "."));
    } 
  else {
      console.log(chalk.cyanBright("Yayy! your score is " + score + "."));
  }

// userData pushed into topScores list
var userDetailObj = {
  name: "",
  score: 0
};
userDetailObj.name = userName;
userDetailObj.score = score;
topScores.push(userDetailObj);

// Printing ScoreBoards
console.log(chalk.cyanBright("\nLeaderboard: "))
for (var i = 0; i < topScores.length; i++) {
  console.log(chalk.cyanBright(topScores[i].name + " :- " + topScores[i].score))
}