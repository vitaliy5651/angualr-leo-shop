import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface CatalogItem {
  creationDate: number;
  description?: string;
  id: number;
  name?: string;
  price?: number;
  thumbnailUrl?: any;
  url?: any;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data!: CatalogItem;
  @Output() delete = new EventEmitter();

  constructor() { }

  onDelete(id: number) {
    this.delete.emit(id);
  }

}
