import {Component, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'name-select',
  providers: [],
  directives: [],
  pipes: [ ],
  styleUrls: ['./name-select.style.css'],
  templateUrl: './name-select.html',
  events : ['switchRequest']
})

export class NameSelectComponent {
  name: string;
  switchRequest:any;

  constructor() {
    this.switchRequest = new EventEmitter();
  }

  ngOnInit() {

  }

  ngOnChanges(){

  }

  selectName(name){
    this.name = name;
    this.switchToQuest();
  }

  switchToQuest(){
    this.switchRequest.emit();

  }



}
