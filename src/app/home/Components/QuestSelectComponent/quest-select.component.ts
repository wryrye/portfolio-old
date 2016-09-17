import {Component, Input, EventEmitter} from '@angular/core';


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

  constructor() {
    this.switchRequest = new EventEmitter();
  }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  selectQuest(quest){
    this.quest = quest;
    this.switchToColor();
  }

  switchToColor(){
    console.log('switching to rest...')
    this.switchRequest.emit();
  }


}
