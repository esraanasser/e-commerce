import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  getProuducts():Observable<any>
{
   return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/products'
    )
  }
  getProuductDetails(id:any):Observable<any>
  {
     return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`
      )
    }
 getCategories():Observable<any>
    {
       return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/categories'
        )
      }
 getCategoriesDetails(id:string |null):Observable<any>
    {
       return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`
        )
      }
 getSubCategories():Observable<any>
    {
       return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/subcategories'
        )
      }
      GetspecificSubCategory(id:string |null):Observable<any>
    {
       return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/subcategories/${id}`
        )
      }
 getBrands():Observable<any>
    {
       return this._HttpClient.get('https://ecommerce.routemisr.com/api/v1/brands'
        )
      }
      GetSubCategoriesOnCategory(id:string |null):Observable<any>
      {

      return this._HttpClient.get( `https://ecommerce.routemisr.com/api/v1/categories/${id}/subcategories`)
      }


}
