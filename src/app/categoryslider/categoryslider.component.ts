import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categoryslider',
  templateUrl: './categoryslider.component.html',
  styleUrls: ['./categoryslider.component.css']
})
export class CategorysliderComponent  implements OnInit {
  categories:any[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 5
      },
      740: {
        items: 6
      },
      940: {
        items: 7
      }
     
    },
    nav: true
  }
constructor(private _ProductService:ProductService){

}
ngOnInit(): void {
  this._ProductService.getCategories().subscribe({
    next:(reponse)=> {
     
      this.categories = reponse.data;
    }
    
  }
   
  )
}

}
