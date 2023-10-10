import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Brands } from '../brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  Brands:Brands[]=[];
  constructor(private _ProductService:ProductService){

  }

  ngOnInit(): void {
    this._ProductService.getBrands().subscribe({
      next:(reponse)=> {
       
        this.Brands = reponse.data;
        console.log(this.Brands);
        
      }
      
    }
     
    )
  }

}
