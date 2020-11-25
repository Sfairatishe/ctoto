import{Component, OnInit} from '@angular/core'
import {  trigger, style, animate, transition} from '@angular/animations';

@Component({
    selector: 'app-chara',
    templateUrl: './chara.component.html',
    styleUrls: ['./chara.component.css'],
    animations: [
        trigger('myTrigger', [
            transition(':increment, :decrement', [
              style({opacity:0}),
              animate(1000)
            ])
          ])
      ]
})

export class charaComponent implements OnInit {
    bannerImg = "https://pngimg.com/uploads/crowd/crowd_PNG9.png" 
    bannerText = ""
    numberOfTextOption = 0
    bannerTextOption = [ "<em>Арбитриум</em> предоставляет решение ваших проблемм. Если вам нужна помощь в организации мероприятия, то <em>Арбитриум</em> - Ваш выбор.", "Наше приложение предоставлят легкий способ организации пропускной системы, а так же связь с участниками мероприятия."]

    ngOnInit(){
        this.bannerText = this.bannerTextOption[this.numberOfTextOption]
    }

    changeTextToPrevious(){

        if(this.numberOfTextOption != 0){
            this.numberOfTextOption--
        }
        else {
            this.numberOfTextOption =  this.bannerTextOption.length - 1
        }

        this.bannerText =  this.bannerTextOption[this.numberOfTextOption]
       
    }

    changeTextToNext(){
        if(this.numberOfTextOption != this.bannerTextOption.length - 1){
            this.numberOfTextOption++
        }
        else{
            this.numberOfTextOption = 0;
        }
        this.bannerText =  this.bannerTextOption[this.numberOfTextOption]
    }
}   
