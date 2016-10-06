import {Component, ViewChild, Input} from '@angular/core';
import { Title } from './title';
import { XLarge } from './x-large';
import { NameSelectComponent} from  './Components/NameSelectComponent/name-select.component'
import {QuestSelectComponent} from "./Components/QuestSelectComponent/quest-select.component";
import {ColorSelectComponent} from "./Components/ColorSelectComponent/color-select.component";
import 'pdfjs-dist';
import {PageScroll} from 'ng2-page-scroll'


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


  ngAfterViewInit(){

    //use CSS animation endings for signalling/transitioning
    $("#knight")
        .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            jQuery.proxy(function(e){
              if($("#knight").css("animation-name") == "launch"){ //when knight gets launched...
                $("#knight").css("animation-name","moveOnScreen2"); //move knight back on screen
              }

              if ($("#knight").css("animation-name") == "moveOnScreen") { //when knight enters window 1st time...
                document.getElementById('name').className = 'fadein center'; // fade in first question
                document.getElementById('name').style.opacity = '1'; //and make it stay opaque
              }

              if ($("#knight").css("animation-name") == "crossBridge") {//when night retreives resume...
                $("#theCanvas").css("visibility", "visible");  //make canvas visible
                $("#theCanvas").css("animation-name", "grow");// and expand it
                $("#theCanvas").css("animation-duration", "2s");

                $("#name").css("visibility", "hidden");  //and hide the question elements
                $("#quest").css("visibility", "hidden");
                $("#color").css("visibility", "hidden");
              }
              //note: jQuery.proxy allows reference to 'this'
            },this));

    $("#theCanvas")
        .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            function(e){ //when resume expands completely
              $("#close").css("visibility","visible"); //show close button
              $("#knight").css("transform","none"); //toggle-reset knight animation
              $("#knight").css("left","21%"); //and position
              $("#gatekeeper").css("visibility","visible"); //show gatekeeper
              $("#poof").css("animation","toggle"); //toggle-reset poof cloud
              $("#boss").css("overflow", "scroll"); //enable scrolling
            });


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

    $("#loaded")
        .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
            jQuery.proxy(function(e){ //when loading is done and animation ends
              $("#loaded").css("visibility", "hidden"); //remember to hide loading page
            },this));

  }

  //used some Document below in place of jQuery for DOM manipulation

  nameToQuest(){ //fade out name question and fadein quest question
    document.getElementById('name').className ='fadeout center';
    document.getElementById('name').style.opacity = '0';
    document.getElementById('name').style.zIndex = '0';
    document.getElementById('quest').className ='fadein center';
    document.getElementById('quest').style.opacity = '1';
    this.name = this.nameSelectComponent.name;
  }
  questToColor(){ //fade out quest question and fadein color question
    document.getElementById('quest').className ='fadeout center';
    document.getElementById('quest').style.opacity = '0';
    document.getElementById('quest').style.zIndex = '0';
    document.getElementById('color').className ='fadein center';
    document.getElementById('color').style.opacity = '1';
    this.quest = this.questSelectComponent.quest;

    //convenient spot to toggle animations to be set in the future
    $("#knight").css("animation","toggle");
    $("#theCanvas").css("animation-name", "toggle");
  }

  colorToNext(){//fade out color question and move on to next action
    document.getElementById('color').className ='fadeout center';
    document.getElementById('color').style.opacity = '0';
    document.getElementById('color').style.zIndex = '0';
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
  }


  //closes Resume
  closeResume(){
    $("#theCanvas").css("visibility","hidden"); //hides resume canvas
    $("#close").css("visibility","hidden"); //hides close button
    $("#boss").css("overflow", "hidden"); //disables scroll
    $("#replay").css("visibility","visible"); //show replay button
    document.getElementById('replay').className ='fadein center oldstyle'; //and style it
  }

  //reset game to initial values
  replay(){
    console.log("here");
    document.getElementById('name').className ='fadein center';
    document.getElementById('name').style.opacity = '1'; //JS DOM Manipulation
    document.getElementById('name').style.visibility = 'visible';
    document.getElementById('quest').style.visibility = 'visible';
    document.getElementById('color').style.visibility = 'visible';
    document.getElementById('name').style.zIndex = '3';
    document.getElementById('quest').style.zIndex = '2';
    document.getElementById('color').style.zIndex = '1';
    $("#replay").css("visibility","hidden");
  }

  //launch knight into the abyss when he lies about his own favorite color?!
  launch(){
    $("#knight").css("animation", "launch");
    $("#knight").css("animation-duration", "2s");
  }

}
