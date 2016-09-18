import {Component, ViewChild, Input} from '@angular/core';
import { AppState } from '../app.service';
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
  count: number;

  constructor() {}
  // name = 'Name';



  @ViewChild(NameSelectComponent)
  private nameSelectComponent: NameSelectComponent;

  @ViewChild(QuestSelectComponent)
  private questSelectComponent: QuestSelectComponent;

  @ViewChild(ColorSelectComponent)
  private colorSelectComponent: ColorSelectComponent;


  ngAfterViewInit(){
    this.count = 0;
    console.log(this.count);
    $("#knight")
      .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        jQuery.proxy(function(e){
        console.log(this.count);
        if(this.count==0){
          document.getElementById('name').className ='fadein center';
          document.getElementById('name').style.opacity = '1'; //JS DOM Manipulation
          // document.getElementById('name').style.visibility = 'visible'; //JS DOM Manipulation
        }

        if(this.count == 1) {
          $("#theCanvas").css("visibility", "visible"); //JQuery DOM Manipulation
          $("#theCanvas").css("animation-name", "grow");
          $("#theCanvas").css("animation-duration", "2s");
        }
          this.count++;
           // $(this).off(e);
        },this));

    $("#theCanvas")
      .on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
        function(e){
          $("#close").css("visibility","visible");
          $("#knight").css("transform","none");
          $("#boss").css("overflow", "scroll");


          //$(this).off(e);
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

    $("#knight").css("animation","toggle");
    $("#theCanvas").css("animation-name", "toggle");
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



  closeStuff(){
    $("#theCanvas").css("visibility","hidden");
    $("#close").css("visibility","hidden");
    $("#boss").css("overflow", "hidden");
    document.getElementById('name').style.visibility = 'hidden';
    document.getElementById('quest').style.visibility = 'hidden';
    document.getElementById('color').style.visibility = 'hidden';
    $("#replay").css("visibility","visible");
    document.getElementById('replay').className ='fadein center oldstyle';
  }

  replay(){
    this.count=1;
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

}
