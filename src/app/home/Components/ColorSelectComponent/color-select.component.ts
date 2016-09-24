import {Component, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'color-select',
  providers: [],
  directives: [],
  pipes: [ ],
  styleUrls: ['./color-select.style.css'],
  templateUrl: './color-select.html',
  events : ['resumeRequest','otherRequest']
})

export class ColorSelectComponent {
  color: string;
  @Input()
  quest: string;
  resumeRequest:any;
  otherRequest: any;

  constructor() {
    this.resumeRequest = new EventEmitter();
    this.otherRequest = new EventEmitter();
  }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  selectColor(color){
    this.color = color;
    if(color =="launch"){
      this.switchToOther()
    }
    else{
      this.switchToResume();
    }

    // if(this.quest == 'resume'){
    //   this.switchToResume();
    // }
    // else{
    //   this.switchToOther();
    // }
  }

  switchToResume(){
    console.log('switching to resume...')
    this.resumeRequest.emit();
  }
  switchToOther(){
    console.log('switching to other...')
    this.otherRequest.emit();
  }


}
