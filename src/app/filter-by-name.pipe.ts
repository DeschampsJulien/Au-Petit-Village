import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})

export class FilterByNamePipe implements PipeTransform {

  transform(figurines: any[], searchText: string): any[] {

    if (!figurines) {
      return [];
    }

    else if (!searchText) {
      return figurines;
    }

    searchText = searchText.toLowerCase();
    return figurines.filter(figurine => figurine.name.toLowerCase().includes(searchText)
    );

  }

}
