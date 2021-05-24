class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
    question = new Question();
    question.display();

    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    background("yellow");
    
      //write code to change the background color here
    

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Result of the Quiz",340, 50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      var displayPosition = 250;
      fill("purple");
      textSize(15);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,360);

    for(var plr in allContestants){
      
      var correctAns = "2";
      if (correctAns === allContestants[plr].answer){
      fill("green");
      }
      else{
      fill("red");
      }
      displayPosition += 25;
      textSize(20);
      text(allContestants[plr].name + ":" + allContestants[plr].answer, 270,displayPosition);
      }
  }
  

   //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
