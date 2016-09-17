import {Component, ViewChild, Input} from '@angular/core';
import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { NameSelectComponent} from  './Components/NameSelectComponent/name-select.component'
import {QuestSelectComponent} from "./Components/QuestSelectComponent/quest-select.component";
import {ColorSelectComponent} from "./Components/ColorSelectComponent/color-select.component";
import 'pdfjs-dist';
import {PageScroll} from 'ng2-page-scroll'
import {BehaviorSubject} from "rxjs";
// var $ = require('jquery');
declare var $:JQueryStatic;


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
  plugins:[

  ]
})

export class Home  {
  @Input()
  name: string;
  quest: string;
  color: string;

  constructor() {}
  // name = 'Name';



  @ViewChild(NameSelectComponent)
  private nameSelectComponent: NameSelectComponent;

  @ViewChild(QuestSelectComponent)
  private questSelectComponent: QuestSelectComponent;

  @ViewChild(ColorSelectComponent)
  private colorSelectComponent: ColorSelectComponent;


  ngAfterViewInit(){
    var count = 0;
    $("#knight")
      .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        function(e){
        if(count==0){
          document.getElementById('name').className ='fadein center';
          document.getElementById('name').style.opacity = '1'; //JS DOM Manipulation
        }

        if(count == 1) {
          $("#theCanvas").css("visibility", "visible"); //JQuery DOM Manipulation
          $("#theCanvas").css("animation-name", "grow");
          $("#theCanvas").css("animation-duration", "2s");
        }
          count++;
           $(this).off(e);
        });

    $("#theCanvas")
      .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        function(e){
          $("#close").css("visibility","visible");
          $("#knight").css("transform","none");
          $("#boss").css("overflow", "scroll");


          $(this).off(e);
        });

    $("#close")
      .on("click",
        function(e){
          $("#boss").css("overflow", "hidden");
          });


}

  ngOnInit() {

  }

  ngOnChanges(){

  }


  nameToQuest(){
    document.getElementById('name').className ='fadeout center';
    document.getElementById('name').style.opacity = '0';
    document.getElementById('name').style.zIndex = '0';
    document.getElementById('quest').className ='fadein center';
    document.getElementById('quest').style.opacity = '1';
    this.name = this.nameSelectComponent.name;
  }
  questToColor(){
    document.getElementById('quest').className ='fadeout center';
    document.getElementById('quest').style.opacity = '0';
    document.getElementById('quest').style.zIndex = '0';
    document.getElementById('color').className ='fadein center';
    document.getElementById('color').style.opacity = '1';
    this.quest = this.questSelectComponent.quest;
  }

  colorToNext(){
    document.getElementById('color').className ='fadeout center';
    document.getElementById('color').style.opacity = '0';
    document.getElementById('color').style.zIndex = '0';
    $("#knight").css("animation","crossBridge");
    $("#knight").css("animation-duration","6s");
    $("#knight").css("transform","scaleX(-1)");

    this.color = this.colorSelectComponent.color;
  }

  showResume(){
    this.colorToNext()
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
        //noinspection TypeScriptUnresolvedVariable
        canvas.width = viewport.width;
        //noinspection TypeScriptUnresolvedVariable
        canvas.height = viewport.height;
        //noinspection TypeScriptUnresolvedFunction
        var ctx = canvas.getContext('2d');
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



  closeStuff(){
    $("#theCanvas").css("visibility","hidden");
    $("#close").css("visibility","hidden");
  }


}
