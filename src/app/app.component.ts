import { Component, OnInit,OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit ,OnDestroy{

  time: number = 0;
  liste:number[];
  running: boolean = false;
  private subscription: Subscription;


  heure: number;
  minute: number;
  seconde: number;
  alarmSet: boolean = false;
  alertTime = new Date ;
  TimeParHeure : number ;


   countNumber = 0;
   maintenant = new Date();
   selectedDateminute: number = 0;
   maintenantEnMinute : number =0 ;
  constructor(){

  }
  ngOnInit(){
    this.alertTime.getTime();
    this.alertTime.setMinutes(this.maintenant.getMinutes()),
      this.TimeParHeure =  this.maintenant.getMinutes() / 60 ;
      console.log(this.TimeParHeure)
    console.log('timiniuteme par heure ',this.alertTime.setMinutes(this.maintenant.getMinutes() %  60));

    this.convertirEnMinutes(this.maintenant);
     console.log("maintenant en miniute",this.convertirEnMinutes(this.maintenant));
  }
  submitForm() {
    console.log('Date sélectionnée :', this.selectedDateminute);
    // Vous pouvez effectuer d'autres actions avec la date sélectionnée ici
  }
  resrBtn(){
    this.countNumber = 8 ;
  }
  increaseBtn(){
    this.countNumber--;
  }

  decreaseBtn(){
     if(this.countNumber){
      this.countNumber = this.countNumber + 1 ;

     }
   }



   reveil(tempsEnMinutes: number){
    const tempsEnMillisecondes = tempsEnMinutes * 60 * 1000; // Convertit le temps en minutes en millisecondes
    console.log(`Réveil réglé dans ${tempsEnMinutes} minute(s).`);

    setTimeout(() => {
      console.log("Réveil !"); // Affiche le message après le temps spécifié
    }, tempsEnMillisecondes);
  }


  convertirEnMinutes(date: Date): number {
    const millisecondesParMinute = 1000 * 60; // Nombre de millisecondes dans une minute
    const differenceEnMillisecondes = Date.now() - date.getTime(); // Différence en millisecondes entre la date actuelle et la date donnée
    const minutes = Math.floor(differenceEnMillisecondes / millisecondesParMinute); // Convertit la différence en minutes entières

    return minutes;
  }

  setAlarm() {
    this.alarmSet = true;
  }

  start(){
     if(!this.running){
       this.running  = true ;
       this.subscription  = interval(10).subscribe(()=>{
        this.time +=10 ;
       });
     }

  }



  stop(){
    if(this.running){
        this.running  = false ;
        this.subscription.unsubscribe();
    }

   }
   formatTime(){
    const minute =Math.floor(this.time / 6000 );
    const seconds = Math.floor((this.time % 60000) / 1000);
    const milliseconds = Math.floor((this.time % 1000) / 10);
    return `${this.pad(minute, 2)}:${this.pad(seconds, 2)}:${this.pad(milliseconds, 2)}`;


   }


    reset() {
      this.time = 0;
      this.running = false;
      if (this.subscription) {
        this.subscription.unsubscribe();
      }


   }



   pad(num: number, size: number) {
    let s = num + '';
    while (s.length < size) {
      s = '0' + s;
    }
    return s;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
