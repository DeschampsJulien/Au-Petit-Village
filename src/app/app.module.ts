import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { BackgroundHomeComponent } from './background-home/background-home.component';
import { FigurinesSortComponent } from './figurines-sort/figurines-sort.component';
import { FilterByNamePipe } from './filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { SortByPricePipe } from './sort-by-price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    BackgroundHomeComponent,
    FigurinesSortComponent,
    FilterByNamePipe,
    SortByPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
