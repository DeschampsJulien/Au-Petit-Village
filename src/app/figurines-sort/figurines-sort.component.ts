import { Component } from '@angular/core';
import { FigurinesService } from '../figurines.service';

@Component({
  selector: 'app-figurines-sort',
  templateUrl: './figurines-sort.component.html',
  styleUrl: './figurines-sort.component.css',
})
export class FigurinesSortComponent {

  // APPEL DU TABLEAU DE FIGURINES
  figurines: any[] = [];
  constructor(private figurinesService: FigurinesService) {} 
  
  ngOnInit(): void {
    this.figurines = this.figurinesService.figurines
  }

  // APPEL DES FILTRES
  searchText: string = '';
  sortByPrice: string= '';
  // productList: any[] = [];

}
