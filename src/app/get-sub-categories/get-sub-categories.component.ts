import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';


@Component({
  selector: 'app-get-sub-categories',
  templateUrl: './get-sub-categories.component.html',
  styleUrls: ['./get-sub-categories.component.css']
})
export class GetSubCategoriesComponent  implements OnInit{
  CategoriesDetails :Category={} as Category
  subcategoryId:string|null='';
constructor(private _ProductService:ProductService,
  private _ActivatedRoute:ActivatedRoute){

}


ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
this.subcategoryId =params.get("id")
console.log(this.subcategoryId);

    }
  })

  this._ProductService.getCategoriesDetails(this.subcategoryId).subscribe({
    next:(reponse)=> {
      this.CategoriesDetails = reponse.data
    //  console.log( this.CategoriesDetails);
     console.log(this.subcategoryId);

}
})}
}

