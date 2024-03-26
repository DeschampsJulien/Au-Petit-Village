import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})

export class SortByPricePipe implements PipeTransform {

  transform(figurines: any[], selectedSort: string): any[] {
    
    if (selectedSort === "price-croissant") {
      return figurines.sort((a: any, b: any) => a.price - b.price);
    }

    else if (selectedSort === "price-decreasing") {
      return figurines.sort((a: any, b: any) => b.price - a.price);
    }
    
    else {
      return figurines;
    }

  }

}
