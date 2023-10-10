import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';


@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  CategoriesDetails :Category={} as Category
  subcategories:Category[]=[]
  categoryId:string |null='';
  subcategoryId:string|null='';
  specificSubCategory:Category={} as Category
  SubCategoriesOnCategory:any[]=[]
constructor(private _ProductService:ProductService,private _ActivatedRoute:ActivatedRoute){

}

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params)=>{
this.categoryId =params.get("id")
    }
  })

  this._ProductService.getSubCategories().subscribe({
    next:(response)=>{
      this.subcategories = response.data
   
    }
  })
  this._ProductService.getCategoriesDetails(this.categoryId).subscribe({
    next:(reponse)=> {
      this.CategoriesDetails = reponse.data
    //  console.log( this.CategoriesDetails);
     console.log(this.categoryId);
    }
    
  }
   
  )
  this._ProductService.GetspecificSubCategory(this.subcategoryId).subscribe({
    next:(response)=>{
      this.specificSubCategory = response.data
      console.log(this.specificSubCategory ,"hiiiiii");
      
    }
  })
 this._ProductService.GetSubCategoriesOnCategory(this.categoryId).subscribe({
  next:(response)=>
  {
    this.SubCategoriesOnCategory = response.data
    console.log(this.SubCategoriesOnCategory,'SubCategoriesOnCategory');
    
  }
 })
}
}
