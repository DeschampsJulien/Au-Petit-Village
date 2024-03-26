import { Component } from '@angular/core';
import { FigurinesService } from '../figurines.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  figurines: any[] = [];
  figurine: any;

  constructor(private route: ActivatedRoute, private figurinesService: FigurinesService, private router: Router ){ }

  ngOnInit() {
    this.figurines = this.figurinesService.getFigurines();

    // RECUPERATION DE ID
    const produitId: string|null = this.route.snapshot.paramMap.get("id");  
  
    if(produitId){
      this.figurine = this.figurines.find((figurine) => figurine.id == produitId)
    } 
  }

  goFigurineList(){
    this.router.navigate(["/"]);
  }
}

