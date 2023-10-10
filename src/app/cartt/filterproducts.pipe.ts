import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproducts'
})
export class FilterproductsPipe implements PipeTransform {

  transform(products:any[]): any[] {
    return products.filter((ele)=>ele.count > 0)
  }

}
