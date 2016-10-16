import {Component, Input, EventEmitter} from '@angular/core';
import {ColorSelectComponent} from "../ColorSelectComponent/color-select.component";


@Component({
  selector: 'quest-select',
  providers: [],
  directives: [],
  pipes: [ ],
  styleUrls: ['./quest-select.style.css'],
  templateUrl: './quest-select.html',
  events : ['switchRequest']
})

export class QuestSelectComponent {
  @Input()
  quest: string;
  switchRequest:any;
  firstTime:any;

  constructor() {
    this.switchRequest = new EventEmitter();
  }

  ngOnInit() {
  this.firstTime = true;
  }

  ngOnChanges(){

  }

  selectQuest(quest){
    if(this.firstTime) {
      this.quest = quest;
      this.switchToColor();
    }
  }

  switchToColor(){
    console.log('switching to rest...')
    this.switchRequest.emit();
  }


}
