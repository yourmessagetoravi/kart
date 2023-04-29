import { Component } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent {
  baners = [
    {img:"01.webp",hd:"Some heading text",ptxt:"Paragraph text comes here to display about product information",alt:"first baner"},
    {img:"02.webp",hd:"Some heading text2",ptxt:"Paragraph text comes here to display about product information2",alt:"second baner"},
    {img:"03.webp",hd:"Some heading text3",ptxt:"Paragraph text comes here to display about product information3",alt:"third baner"}

  ];
  path = "./assets/images/baners/";

  slideIndex: number = 0;

  previousSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex--;
    } else {
      this.slideIndex = 2; // or the total number of slides - 1
    }
  }
  
  nextSlide() {
    if (this.slideIndex < 2) { // or the total number of slides - 1
      this.slideIndex++;
    } else {
      this.slideIndex = 0;
    }
  }

}
