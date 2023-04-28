import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  path = "./assets/images/menu/";
  categs = [
    {img:"grossery.webp",tit:"Grossery"},
    {img:"mobiles.webp", tit:"mobiles"},
    {img:"home.webp", tit:"home"},
    {img:"appliences.webp", tit:"aappliences"},
    {img:"beauty and toys.webp", tit:"beauty and toys"},
    {img:"fashion.webp", tit:"fashion"},
    {img:"top offers.webp", tit:"Top offers"},
    {img:"travel.webp", tit:"Travel"},
    {img:"electronics.webp", tit:"Electronics"}
  ]

}
