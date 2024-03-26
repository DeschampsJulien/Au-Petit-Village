import { Component, input } from '@angular/core';
import { FigurinesService } from '../figurines.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  title = "Présentation du petit village"

  figurines: any[] = [];
  constructor(private figurinesService: FigurinesService) {} 

  ngOnInit(): void {
    this.figurines = this.figurinesService.figurines
  }

  // RENDRE VISIBLE OU INVISIBLE AU CLICK
  // isVisible: boolean = true;
  // onClick() {
  //   this.isVisible = !this.isVisible;
  // }

}

