import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  minutes =0;
  seconds = 0;
  sminutes:string ="00";
  sseconds:string = "00";
  time:string ="";
  isStartButtonClicked =false;
  isResumeButtonClicked = false;
  count = 0;
  isEndButtonClicked = false;
  ti:any;
  resumeTime(){
    this.count++;
    if(this.count%2 ==1)
    {
      this.isResumeButtonClicked = true;
    }
    else{
      this.isResumeButtonClicked =false;
      this.seconds--;
      this.startTime();
    }
    
   
  }
  endTime()
  {
     
     clearInterval(this.ti);
     this.sminutes ="00";
     this.sseconds ="00";
     this.minutes=0;
     this.seconds=0;
  }
  startTime()
  {
     this.ti = setInterval(() => {
       this.seconds++;
 
       if(this.isResumeButtonClicked)
       {
         clearInterval(this.ti);
       }
       else
       {   
         
          if(this.seconds == 60)
           {
             this.seconds=0;
             this.minutes++;
           }
           if(this.seconds<10)
           {
             this.sseconds = "0"+this.seconds;
           }
           else{
             this.sseconds = this.seconds.toString();
           }
           if(this.minutes <10)
           {
             this.sminutes = "0"+this.minutes;
           }
           else{
             this.sminutes = this.minutes.toString();
           }
       }
 
 
      
     },1000)
  }


}
