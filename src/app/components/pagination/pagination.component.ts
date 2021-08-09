import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {

  currentPage = 0;
  totalPages = 1;
  
  @Input() items: any[] = [];
  @Input() step: number = 5;
  @Output() changePage = new EventEmitter();

  ngOnChanges(){
    this.totalPages = Math.ceil(this.items.length / this.step);
  }

  prev() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.changePage.emit(this.currentPage);
    }
  }

  next() {
    if (this.totalPages > this.currentPage + 1) {
      this.currentPage++;
      this.changePage.emit(this.currentPage);
    }

  }

}
