import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(product: any[], searchText: string): any[] {

    if (!product) {
      return [];
    }
    if (!searchText) {
      return product;
    }
    searchText = searchText.toLocaleLowerCase();

    return product.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}