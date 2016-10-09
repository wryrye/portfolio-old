import {Component, ViewChild, Input} from '@angular/core';
import { Title } from './title';
import { XLarge } from './x-large';
import { NameSelectComponent} from  './Components/NameSelectComponent/name-select.component'
import {QuestSelectComponent} from "./Components/QuestSelectComponent/quest-select.component";
import {ColorSelectComponent} from "./Components/ColorSelectComponent/color-select.component";
import {PageScroll} from 'ng2-page-scroll'
import 'pdfjs-dist';


@Component({
    selector: 'home',  // <home></home>
    providers: [
        Title,
    ],
    directives: [
        XLarge,
        NameSelectComponent,
        QuestSelectComponent,
        ColorSelectComponent,
        PageScroll
    ],
    pipes: [ ],
    styleUrls: [ './home.style.css' ],
    templateUrl: './home.template.html',

})

export class Home  {
    @Input()
    name: string;
    quest: string;
    color: string;

    constructor() {}

    //can access child methods and fields
    @ViewChild(NameSelectComponent)
    private nameSelectComponent: NameSelectComponent;

    @ViewChild(QuestSelectComponent)
    private questSelectComponent: QuestSelectComponent;

    @ViewChild(ColorSelectComponent)
    private colorSelectComponent: ColorSelectComponent;

    ngOnInit(){
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            console.log('hello mobile user!');
            $(".question").css("font-size", "2em");
            $(".button").css("font-size", "1em");
            $("#replay").css("font-size", "4em");
        }
    }

    ngAfterViewInit(){

        //use CSS animation endings for signalling/transitioning

        $("#loaded")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){ //when loading is done and animation ends
                    $("#loaded").css("visibility", "hidden"); //hide loading page
                    $("#knight").css("visibility", "visible"); //show knight
                    $("#knight").css("animation-name", "moveOnScreen"); //and animate him!
                },this));

        $("#knight")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){
                    if($("#knight").css("animation-name") == "launch"){ //when knight gets launched...
                        $("#knight").css("animation-name","moveOnScreen2"); //move knight back on screen
                    }

                    if ($("#knight").css("animation-name") == "moveOnScreen") { //when knight enters window 1st time...
                        $("#name").css("animation-name","fadein");
                        $("#name").css("opacity","1");
                        $("#name").css("visibility", "visible");

                        $("#speech").css("animation-name","fadein");
                        $("#speech").css("opacity","1");
                        $("#speech").css("visibility", "visible");

                        $("#question-wrapper").css("visibility", "visible");

                    }

                    if ($("#knight").css("animation-name") == "crossBridge") {//when night retreives item...

                        if(this.questSelectComponent.quest == "holygrail") {
                            $("#theCanvas").css("visibility", "visible");
                            $("#theCanvas").css("animation-name", "fadein");
                        }
                        else {
                            $("#theCanvas").css("visibility", "visible");  //make canvas visible
                            $("#theCanvas").css("animation-name", "grow");// and expand it ***
                        }

                        $("#theCanvas").css("animation-duration", "2s");
                    }
                    //note: jQuery.proxy allows reference to 'this'
                },this));

        $("#theCanvas")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){ //when resume expands completely
                    $("#close").css("visibility","visible"); //show close button
                    $("#knight").css("transform","none"); //reset knight direction
                    $("#knight").css("left","21%"); //and position
                    $("#poof").css("animation","toggle"); //toggle-reset poof cloud
                    $("#gatekeeper").css("visibility","visible"); //show gatekeeper
                     if(this.questSelectComponent.quest != "holygrail") {
                        $("#wrapper").css("overflow-y", "scroll");
                     } //enable scrolling
                },this));


        $("#color")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){
                    if($("#color").css("opacity") == "0"  ) { //when color question fades out (wait for 2nd animation with opacity check)
                        $("#poof").css("animation", "explode"); //explode the poof
                        $("#poof").css("animation-duration", "1.5s");

                        $("#gatekeeper").css("visibility", "hidden");//gatekeeper apparates!

                        $("#knight").css("animation", "crossBridge"); //knight crosses the bridge
                        $("#knight").css("animation-duration", "6s");
                        $("#knight").css("transform", "scaleX(-1)"); //and turns around
                        $("#knight").css("left", "35%");
                    }
                },this));

        $("#speech")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){
                    if($("#speech").css("animation-name") == "fadeout"  ) { //when color question fades out (wait for 2nd animation with opacity check)
                        $("#question-wrapper").css("visibility", "hidden");
                        $("#name").css("visibility", "hidden");  //and hide the question elements
                        $("#quest").css("visibility", "hidden");
                        $("#color").css("visibility", "hidden");
                        $("#speech").css("visibility", "hidden");
                    }
                },this));


    }


    nameToQuest(){ //fade out name question and fadein quest question
        $("#name").css("animation-name","fadeout")
        $("#name").css("opacity","0");
        $("#name").css("z-index","0");
        $("#quest").css("animation-name","fadein")
        $("#quest").css("opacity","1")
        $("#quest").css("visibility", "visible");
        this.name = this.nameSelectComponent.name;
    }
    questToColor(){ //fade out quest question and fadein color question
        $("#quest").css("animation-name","fadeout")
        $("#quest").css("opacity","0");
        $("#quest").css("z-index","0");
        $("#color").css("animation-name","fadein")
        $("#color").css("opacity","1")
        $("#color").css("visibility", "visible");
        this.quest = this.questSelectComponent.quest;

        //convenient spot to toggle animations to be set again in the future
        $("#knight").css("animation","toggle");
        $("#theCanvas").css("animation-name", "toggle");
        $("#wrapper").css("animation-name", "toggle");
        $("#replay").css("animation-name", "toggle");
    }

    colorToNext(){//fade out color question and move on to next action
        $("#color").css("animation-name","fadeout")
        $("#color").css("opacity","0");
        $("#color").css("z-index","0");
        $("#speech").css("animation-name","fadeout")
        $("#speech").css("opacity","0");
        $("#speech").css("z-index","0");
        this.color = this.colorSelectComponent.color;
    }

    //shows Resume
    showResume(){
        this.colorToNext()
        //noinspection TypeScriptUnresolvedFunction
        var pdfjsLib = require('pdfjs-dist/build/pdf.js');
        var pdfPath = '../../assets/docs/Ryan Coughlin Resume.pdf';
        pdfjsLib.PDFJS.workerSrc = "pdfjs-dist/build/pdf.worker.js";
        var loadingTask = pdfjsLib.getDocument(pdfPath);
        console.log(loadingTask);

        var PAGE_TO_VIEW = 1;
        var SCALE = 1.0;

        var loadingTask = pdfjsLib.getDocument(pdfPath);
        loadingTask.promise.then(function (pdfDocument) {
            // Request a first page
            return pdfDocument.getPage(1).then(function (pdfPage) {
                // Display page on the existing canvas with 100% scale.

                //var viewport = pdfPage.getViewport(1);
                var canvas = document.getElementById('theCanvas');

                var viewport = pdfPage.getViewport(3.0);

                (<HTMLInputElement>canvas).width = viewport.width;
                (<HTMLInputElement>canvas).height = viewport.height;
                var ctx = (<HTMLCanvasElement> canvas).getContext('2d');
                var renderTask = pdfPage.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
                return renderTask.promise;
            });
        }).catch(function (reason) {
            console.error('Error: ' + reason);
        });
        $("#theCanvas").css("height","auto");
    }

    showEssay(){
        this.colorToNext()
        //noinspection TypeScriptUnresolvedFunction
        var pdfjsLib = require('pdfjs-dist/build/pdf.js');
        var pdfPath = '../../assets/docs/chinessay.pdf';
        pdfjsLib.PDFJS.workerSrc = "pdfjs-dist/build/pdf.worker.js";
        var loadingTask = pdfjsLib.getDocument(pdfPath);
        console.log(loadingTask);

        var PAGE_TO_VIEW = 1;
        var SCALE = 1.0;

        var loadingTask = pdfjsLib.getDocument(pdfPath);
        loadingTask.promise.then(function (pdfDocument) {
            // Request a first page



            return pdfDocument.getPage(1).then(function (pdfPage) {
                // Display page on the existing canvas with 100% scale.

                //var viewport = pdfPage.getViewport(1);
                var canvas = document.getElementById('theCanvas');

                var viewport = pdfPage.getViewport(3.0);

                (<HTMLInputElement>canvas).width = viewport.width;
                (<HTMLInputElement>canvas).height = viewport.height;
                var ctx = (<HTMLCanvasElement> canvas).getContext('2d');
                var renderTask = pdfPage.render({
                    canvasContext: ctx,
                    viewport: viewport
                });
                return renderTask.promise;
            });
        }).catch(function (reason) {
            console.error('Error: ' + reason);
        });
        $("#theCanvas").css("height","auto");
    }

    showGrail() {
        this.colorToNext()
        var canvas = document.getElementById('theCanvas');
        var ctx=(<HTMLCanvasElement> canvas).getContext("2d");
        var img = document.getElementById("holygrail");
        (<HTMLInputElement>canvas).width = "660";
        (<HTMLInputElement>canvas).height = "364";
        ctx.drawImage(img, 0, 0,660,364);
        $("#theCanvas").css("height","100%");
    }

    //closes Resume
    closeDocument(){
        $("#theCanvas").css("visibility","hidden"); //hides resume canvas
        $("#close").css("visibility","hidden"); //hides close button
        $("#wrapper").css("overflow-y", "hidden"); //disables scroll

        $("#replay").css("visibility","visible"); //show replay button
        $("#replay").css("animation-name","fadein");
    }

    //launch knight into the abyss when he lies about his own favorite color?!
    launch(){
        $("#knight").css("animation", "launch");
        $("#knight").css("animation-duration", "1s");
    }

    //reset game to initial values
    replay(){
        console.log("replay!!!")
        $("#name").css("z-index","3");
        $("#quest").css("z-index","2");
        $("#color").css("z-index","1");
        $("#replay").css("visibility","hidden");

        $("#wrapper").css("animation", "blur");
        $("#wrapper").css("animation-duration", "1s");
        $("#knight").css("animation-name", "moveOnScreen");
        $("#knight").css("animation-duration", "3s");
    }

    testGrail(){
        $("#knight").css("animation", "crossBridge"); //knight crosses the bridge
        $("#knight").css("animation-duration", "1s");
        this.showGrail();
    }
}
