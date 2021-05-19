import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router'; //router Module

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('changeImage', [
      state('firstAction', style({
        opacity: 0.1
      })),
      state('secondAction', style({
        opacity: 1.0
      })),
      transition('firstAction => secondAction', [
        animate('0.5s')
      ]),
      transition('secondAction => firstAction', [
        animate('0.5s')
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  currentImageId: number = 0;
  imageRoot: String = "/assets/image/"
  imageList: Array<String> = [
    this.imageRoot + "image1.jpg",
    this.imageRoot + "image2.jpg",
    this.imageRoot + "image3.jpg",
    this.imageRoot + "image4.jpg",
    this.imageRoot + "image5.jpg",
    this.imageRoot + "image6.jpg"
  ]
  imageLength: number = this.imageList.length;
  currentImage: String;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getImage(this.currentImageId);
  }
  imageSlideRight(){
    if(this.currentImageId + 1 < this.imageLength){
      this.currentImageId += 1
      this.getImage(this.currentImageId)
    } else { }
  }
  imageSlideLeft(){
    if(this.currentImageId > 0){
      this.currentImageId -= 1
      this.getImage(this.currentImageId)
    } else { }
  }
  getImageList():Observable<number>{
    return of(this.currentImageId);
  }
  getImage(id: number): void{
    this.currentImage = this.imageList[id]
  }
  goBack(): void{
    this.router.navigate(["../"])
  }
}
