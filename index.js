readLineSync=require('readline-sync')
var chalk=require('chalk')
name=readLineSync.question(chalk.cyan.bold.underline("Enter Your Name?"))
console.log("")
console.log("Welcome to the ***Movie GAME*** "+chalk.red.bold.underline("Mr."+name))
console.log("")
console.log(chalk.cyan.bold.underline("Before We start Lets Understand Game Rules"))
console.log("")
console.log("")
console.log(chalk.red.bold.underline("**********Game Rules***************"))
console.log("")
console.log("1)10 Question will be asked on any movie.")
console.log("2)Out of 4 option You have to choose.")
console.log("3)Correct answer will increment score by 2.")
console.log("4)Incorrect answer will decrement score by 1.")
console.log("")
console.log("")
console.log("Lets Start the Game....")
console.log("")


score=0


function listoption(option)
{
  
  for(var i=0;i<option.length;i+=1)
  {
    console.log(i+1+")"+" "+option[i])
  }
  choice=readLineSync.question("Select Correct Option(1-4) From Above?")
  return choice
}


count=1
function play(question,answer,option)
{
console.log(chalk.cyan.underline.bold("***********Question No."+count+"***********"))  
console.log()
console.log(chalk.yellow.underline(question))
console.log("")
userans=listoption(option)
console.log("You selected option no."+userans)
if (userans-1===answer)
{
  console.log("You are Right!")
  score+=2
}
else
{
  console.log("You are Wrong!")
  score-=1
}
console.log("Your Score is:- "+score)
console.log("")
count+=1
}



var questionOne={
Question:"Who is the director of 3 Idiots?",
Answer:2,
option:["Priyadarshan","S. Shankar","RajKumar hirani","AR Murugadoss"]

}

var questionTwo={
Question:"What's the Real name of virus in 3 idiots?",
Answer:3,
option:["Jimmy Shergil","KK Menon","Omi vaidy","Boman Irani"]

}


var questionThree={
Question:"What's the Real name of actor who suicide in the Film?",
Answer:0,
option:["Ali Fazal","Omi vaidya","Rahul Kumar","Atul Tiwari"]
}

var questionFour={
Question:"What's the Real name of Amir Khan in 3 idiots Film?",
Answer:2,
option:["Ranchoddas Chanchad","Amar","Phunksukh Vangdu","Rancho"]

}

var questionFive={
Question:"What was the name of Omi vaidya is 3 Idiots Film?",
Answer:1,
option:["milimeter","Chatur","virus","gadha"]
}

var questionSix={
Question:"Name of Sharman joshi in the 3 Idiots?",
Answer:3,
option:["Farhan","Ajay","Parvindar","Raju"]
}

var questionSeven={
Question:"Name of actress in 3 Idiots Film?",
Answer:1,
option:["Aishwarya Ray Bachhan","Kareena kapoor","Sonam Kapoor","Katerina Kaif"]
}

var questionSeven={
Question:"What did everyone was calling to the boy who was taking care hostel stuffs?",
Answer:0,
option:["milimeter","centimeter","nanometer","kilometer"]
}

var questionEight={
Question:"What was the Relation of mona singh with kareena kapoor in film?",
Answer:2,
option:["nephew","cousine","sister","Best friend"]
}

var questionNine={
Question:"Who changes speech script of Chatur?",
Answer:3,
option:["Raju","milimeter","Farhan","rancho"]
}

var questionTen={
Question:"Who Was Real Ranchoddas Chanchad in the film?",
Answer:1,
option:["R Madhvan","Javed Jaffrey","Omi vaidya","Ali Fazal"]
}

var questionList=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen]

for(var i=0;i<questionList.length;i+=1)
{
  play(questionList[i].Question,questionList[i].Answer,questionList[i].option)
}
if (score<=0)
{
  score=0
}
console.log(chalk.red.bold("Your Final Score is:- "+score))
console.log("")
console.log(chalk.cyan.bold.underline("Checkout Highest Scorers!"))
console.log("")
var playerone={
  Name:"Ravi Sahal",
  Score:19
}
var playertwo={
  Name:"Rushi Thube",
  Score:18
}
var playerthree={
  Name:"Shubham Jagtap",
  Score:18
}

function check_high_score_or_not(players)
{
  for(var i=0;i<players.length;i+=1)
  {
    if(score>=players[i].Score)
    {
      return true
    }

  }
  return false
}
function display_high_scorers(players)
{
  for(var i=0;i<players.length;i+=1)
  {
    console.log("Name:-"+players[i].Name)
    console.log("Score:-"+players[i].Score)
console.log("--------------------------------------")
  }
  
}

var players=[playerone,playertwo,playerthree]
display_high_scorers(players)
console.log("")

var result=check_high_score_or_not(players)
if (result==true)
{
console.log(chalk.yellow.bold("Congrats You are Qualified for level 2"))
console.log("")
console.log("Please send the screenshot of your score so that I can Update the list.")
}
else
{
    console.log(chalk.yellow.bold("Try to score more in our next quiz to qualify for level 2"))
}
console.log("")
console.log(chalk.red.bold.underline("Thanks for Playing the Game Have a Nice day!"))