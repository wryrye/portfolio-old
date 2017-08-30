import {Component, ViewChild, Input} from '@angular/core';
import { Title } from './title';
// import { XLarge } from './x-large';
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
        // XLarge,
        ColorSelectComponent,
        NameSelectComponent,
        QuestSelectComponent,
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
    dataIsLoaded:boolean

    constructor() {}

    //can access child methods and fields
    @ViewChild(NameSelectComponent)
    private nameSelectComponent: NameSelectComponent;

    @ViewChild(QuestSelectComponent)
    private questSelectComponent: QuestSelectComponent;

    @ViewChild(ColorSelectComponent)
    private colorSelectComponent: ColorSelectComponent;

    ngOnInit(){
        //modified settings for mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            console.log('hello mobile user!');
            $(".question").css("font-size", "2em");
            $(".button").css("font-size", "1em");
            $("#replay").css("font-size", "4em");
        }
        //removes loading screens when true
        this.dataIsLoaded = false;

        //paints canvas with loading screen in case document does not load in time
        var canvas = document.getElementById('theCanvas');
        var ctx=(<HTMLCanvasElement> canvas).getContext("2d");

        ctx.fillStyle ="white";
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerWidth*1.414;
        ctx.rect(0,0,window.innerWidth,window.innerWidth*1.414);
        ctx.fill();

        ctx.font="6em goudy_old_stylebold";
        ctx.fillStyle = "black"
        ctx.textAlign="center";
        ctx.fillText("LOADING", window.innerWidth/2, window.innerHeight/2);

    }

    ngAfterViewInit(){

        /**use image load status and CSS animation endings for signals and transitioning**/


        $("#intro")
            .on("load",
                jQuery.proxy(function(e) {  //when intro image is loaded...
                    console.log("intro loaded")
                    $("#loading2").css("visibility", "hidden"); //hide loading animation
                    $("#intro").css("visibility", "visible"); //show intro image
                    $("#intro").css("animation-name", "fadein2");//animate intro image

                },this));

        $("#intro")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){//once intro image has faded in...
                    if($("#intro").css("animation-name") == "fadein2") {
                        $("#intro").css("animation-duration", "2s");
                        $("#intro").css("animation-name","fadeout2");//intiate fade out!

                        $("#wrapper").css("visibility","visible");//show world as intro fades out
                        $("#knight").css("visibility", "visible"); //que knight enter scene
                        $("#knight").css("animation-name", "moveOnScreen"); //and animate him!
                    }
                    else{//when intro has ended completely
                        this.dataIsLoaded = true; //removes loading/intro elements via *ngIf directive
                    }
                },this));

        //monitor knight
        $("#knight")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){
                    if($("#knight").css("animation-name") == "launch"){ //when knight gets launched...
                        $("#knight").css("animation-name","moveOnScreen2"); //move knight back on screen
                    }

                    if ($("#knight").css("animation-name") == "moveOnScreen") { //when knight enters window first time...

                        $("#speech").css("animation-name","fadein"); //fade in and display speech bubble
                        $("#speech").css("opacity","1");
                        $("#speech").css("visibility", "visible");

                        $("#question-wrapper").css("visibility", "visible"); // the question-wrapper
                        $("#question-wrapper").css("opacity","1");

                        $("#name").css("animation-name","fadein"); //and the first question
                        $("#name").css("opacity","1");
                        $("#name").css("visibility", "visible");


                    }

                    if ($("#knight").css("animation-name") == "crossBridge") {//when night retrieves item...

                        if(this.questSelectComponent.quest == "holygrail") { //if seeking the holy grail
                            $("#theCanvas").css("animation-name", "fadein"); //fade in
                        }
                        else {
                            $("#theCanvas").css("animation-name", "grow");//else grow
                        }
                        $("#theCanvas").css("visibility", "visible"); //show canvas
                        $("#theCanvas").css("animation-duration", "2s"); //quickly!
                    }
                    //note: jQuery.proxy allows reference to 'this' class
                },this));

        $("#theCanvas")
            .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                jQuery.proxy(function(e){ //when resume expands completely
                    $("#close").css("visibility","visible"); //show close button regardless

                    $("#knight").css("transform","none"); //reset knight direction
                    $("#knight").css("left","21%"); //and position
                    $("#poof").css("animation","toggle"); //toggle-reset poof cloud
                    $("#gatekeeper").css("visibility","visible"); //show gatekeeper

                    if(this.questSelectComponent.quest != "holygrail") { //for non-grail missions
                        $("#wrapper").css("overflow-y", "scroll"); //also enable scrolling for documents
                        $("#download").css("visibility","visible"); //and show download button
                    }
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
        $("#question-wrapper").css("animation-name","fadeout")
        $("#question-wrapper").css("opacity","0");
        $("#question-wrapper").css("z-index","0");
        this.color = this.colorSelectComponent.color;
    }

    //shows Resume
    showResume(){
        this.colorToNext()
        //noinspection TypeScriptUnresolvedFunction
        var pdfjsLib = require('pdfjs-dist/build/pdf.js');
        var pdfPath = '/assets/docs/ryan_coughlin_resume.pdf';
        $("a").attr("href", pdfPath); //set download path
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

    //shows sample of chinese essay
    showEssay(){
        this.colorToNext()
        //noinspection TypeScriptUnresolvedFunction
        var pdfjsLib = require('pdfjs-dist/build/pdf.js');
        var pdfPath = '/assets/docs/ryan_coughlin_sample_chinese.pdf';
        $("a").attr("href", pdfPath); // set download path
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

                var ctx = (<HTMLCanvasElement> canvas).getContext('2d');

                ctx.canvas.width = viewport.width;
                ctx.canvas.height = viewport.height;

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

    //shows holy grail
    showGrail() {
        this.colorToNext()
        var canvas = document.getElementById('theCanvas');
        var ctx=(<HTMLCanvasElement> canvas).getContext("2d");
        var img = <HTMLVideoElement>document.getElementById("holygrail");
        (<HTMLCanvasElement>canvas).width = 660;
        (<HTMLCanvasElement>canvas).height = 364;
        ctx.drawImage(img, 0, 0,660,364);
        $("#theCanvas").css("height","100%");
    }

    //closes Resume
    closeDocument(){
        $("#theCanvas").css("visibility","hidden"); //hides resume canvas
        $("#close").css("visibility","hidden"); //hides close button
        $("#download").css("visibility","hidden"); //hides close button
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
}
