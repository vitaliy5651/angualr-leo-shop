import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface CatalogItem {
  creationDate: number;
  description: string;
  id: number;
  name: string;
  price?: number;
  thumbnailUrl?: any;
  url?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }

  products: CatalogItem[] = [];
  productsToShow: CatalogItem[] = [];
  filteredProducts: CatalogItem[] = [];
  searchText = "";

  itemsToShow = 5;

  ngOnInit() {
    this.http.get<CatalogItem[]>('https://msbit-exam-products-store.firebaseio.com/products.json') 
    .subscribe((products) => {
      this.products = products;
      this.productsToShow = this.products.slice(0, this.itemsToShow);
    })
  }

  onDelete(id: number) {
    this.productsToShow = this.productsToShow.filter((p) => {
      return p.id !== id;
    })
  }

  onSearch() {
    if (this.searchText.length > 0) {
      this.filteredProducts = this.productsToShow.filter((p) => {
        return p.name.includes(this.searchText) || p.description.includes(this.searchText);
      })
    }
  }

  onChangePage(offset: any){
    console.log('onChangePage: ', offset);
    this.productsToShow = this.products.slice(offset*this.itemsToShow, offset*this.itemsToShow + this.itemsToShow);
    console.log(this.productsToShow );
  }
}
