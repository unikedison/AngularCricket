import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
  teamData = Array<any>();
  team1Data : any;
  team2Data : any;
  team1Score = 0;
  team2Score = 0;
  seconds = 60;
  enableResult = true;
  generateResult = false;
  team1TimeOut = false;
  team2TimeOut = true;
  manOfTheMatch = {
    name: "",
    team: "",
    score: 0
  }  

  constructor() { }

  ngOnInit(): void {

    setInterval(() => {
      if(this.seconds>0)
      this.seconds -= 1; 
    }, 1000);

    setTimeout(()=>{
      this.switchTeamPlay("TEAM 1");
      }, 60000);   
  }    

  switchTeamPlay(team:string){
    if(team=="TEAM 1"){
      this.team1TimeOut = true;
      this.team2TimeOut = false;
    }else{
      this.team2TimeOut = true;
      this.enableResult = false;
    }
   } 

  Hit(team:string){
    this.switchTeamPlay(team);

    for (let i = 1; i <= 10; i++) {
      let balls = Array<number>();

      for (let j = 0; j < 6; j++) {
        let run = Math.floor(Math.random() * 7);
        if(run === 0){
          balls.push(run);
          break;
        }else{
          balls.push(run);
        }
      } 

      let score = balls.reduce((a,b) => {
        return a+b;
      });

      let data = {
        team: team,
        name : `PLAYER${i}`,
        score : balls,
        total : score
      }

      this.teamData.push(data);

      if(this.manOfTheMatch.score < score){
        this.manOfTheMatch.name = data.name;
        this.manOfTheMatch.score = data.total;
        this.manOfTheMatch.team = team;
      }
    }

    this.team1Data = this.teamData.filter(x => x.team=="TEAM 1");    
    this.team2Data = this.teamData.filter(x => x.team=="TEAM 2");

    this.teamData.forEach(x => {
      if(x.team=="TEAM 1" && team=="TEAM 1"){
        this.team1Score += x.score.reduce((a:number,b:number) => a+b);
      }
      if(x.team=="TEAM 2" && team=="TEAM 2"){
        this.team2Score += x.score.reduce((a:number,b:number) => a+b);
      }
    });
  }

  GetResult(){
    this.generateResult = true;
  }

}
