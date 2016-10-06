import {Component, Input, EventEmitter} from '@angular/core';


@Component({
    selector: 'color-select',
    providers: [],
    directives: [],
    pipes: [ ],
    styleUrls: ['./color-select.style.css'],
    templateUrl: './color-select.html',
    events : ['resumeRequest','launchRequest']
})

export class ColorSelectComponent {
    color: string;
    @Input()
    quest: string;
    resumeRequest:any;
    launchRequest: any;

    constructor() {
        this.resumeRequest = new EventEmitter();
        this.launchRequest = new EventEmitter();
    }

    ngOnInit() {

    }

    ngOnChanges(){

    }

    selectColor(color){
        this.color = color;

        if(color =="launch"){
            this.launchKnight()
        }
        else{
            $("#boss").css("cursor","url(../../../../assets/img/"+color+"sword.png), auto")
            this.switchToResume();
        }

    }

    switchToResume(){
        console.log('switching to resume...')
        this.resumeRequest.emit();
    }
    launchKnight(){
        console.log('3..2..1.. launching!')
        this.launchRequest.emit();
    }


}
