import { Component, OnInit, Input,Output,ViewEncapsulation,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StockItemComponent {

  @Input() public stock!: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite=new EventEmitter<Stock>();
   }

  onToggleFavorite(event:any) {
    this.toggleFavorite.emit(this.stock);// = !this.stock.favorite;
  }
  changeStockPrice(){
    this.stock.price+=5;
  }
}
