import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'shared/services/cart.service';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
constructor(private _ActivatedRoute:ActivatedRoute ,private _ProductService:ProductService
  ,private _CartService:CartService)
{}

productDetailes:any;
productId:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>
this.productId = params.get('id')
    );

    this._ProductService.getProuductDetails(this.productId).subscribe({
      next:(response)=> this.productDetailes = response.data
    }

    )
  }


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
        items: 1
      
      }
    },
    nav: true
  }

  addToCart(id:string){
    this._CartService.addProductToCart(id).subscribe(
      {
        next:(response)=> {console.log(response)}
        
      }
    )
  }
}
