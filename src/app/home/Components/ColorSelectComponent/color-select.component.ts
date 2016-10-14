import {Component, Input, EventEmitter} from '@angular/core';


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
        console.log(this.quest)

        if(color =="launch"){
            this.launchKnight()
        }
        else{
            $("#wrapper").css("cursor","url(../../../../assets/img/"+color+"sword.png), auto");
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
        console.log('switching to resume...')
        this.resumeRequest.emit();
    }

    switchToEssay(){
        console.log('switching to essay...')
        this.essayRequest.emit();
    }
    launchKnight(){
        console.log('3..2..1.. launching!')
        this.launchRequest.emit();
    }
    switchToGrail(){
        console.log('switching to essay...')
        this.grailRequest.emit();
    }

}
