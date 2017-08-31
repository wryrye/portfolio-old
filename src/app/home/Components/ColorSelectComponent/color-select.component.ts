import {Component, Input, EventEmitter} from '@angular/core';
import {QuestSelectComponent} from "../QuestSelectComponent/quest-select.component";


@Component({
    selector: 'color-select',
    providers: [],
    directives: [],
    pipes: [ ],
    styleUrls: ['./color-select.style.css'],
    templateUrl: './color-select.html',
    events : ['resumeRequest','launchRequest','essayRequest','grailRequest']
})

export class ColorSelectComponent {
    color: string;
    @Input()
    quest: string;
    resumeRequest:any;
    launchRequest: any;
    essayRequest: any;
    grailRequest: any;

    constructor() {
        this.resumeRequest = new EventEmitter();
        this.launchRequest = new EventEmitter();
        this.essayRequest = new EventEmitter();
        this.grailRequest = new EventEmitter();
    }

    ngOnInit() {

    }

    ngOnChanges(){

    }

    selectColor(color){
        if(color =="launch"){
            this.launchKnight()
        }
        else{
            $("#wrapper").css("cursor","url(./assets/img/"+color+"sword.png), auto");
            if(this.quest == 'essay'){
                this.switchToEssay();

            }
            else if(this.quest == 'holygrail'){
                this.switchToGrail();
            }
            else{
                this.switchToResume();
            }
        }

    }

    switchToResume(){
        this.resumeRequest.emit();
    }

    switchToEssay(){
        this.essayRequest.emit();
    }
    launchKnight(){
        this.launchRequest.emit();
    }
    switchToGrail(){
        this.grailRequest.emit();
    }

}
