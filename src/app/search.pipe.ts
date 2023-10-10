import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products:Product[],searchTerm:string ): Product[] {
    return Products.filter((Product)=> Product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
