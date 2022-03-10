import { Component, OnInit,
  SimpleChanges,OnChanges,OnDestroy,DoCheck,
AfterContentChecked,AfterViewInit,AfterContentInit,AfterViewChecked,
  Input,Output,ViewEncapsulation,EventEmitter,ChangeDetectionStrategy } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnChanges,
                                            OnDestroy, DoCheck,
                                            AfterContentChecked,
                                            AfterContentInit,
                                            AfterViewChecked,
                                            AfterViewInit {

  @Input() public stock!: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite=new EventEmitter<Stock>();
   }
   ngOnInit(): void {
    console.log('Stock Item Component - On Init');
    }
    ngAfterViewInit(): void {
    console.log('Stock Item Component - After View Init');
    }
    ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
    }
    ngAfterContentInit(): void {
    console.log('Stock Item Component - After Content Init');
    }
    ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
    }
    ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
    }
    ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
    }
    ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
    }

  onToggleFavorite(event:any) {
    this.toggleFavorite.emit(this.stock);// = !this.stock.favorite;
  }
  changeStockPrice(){
    this.stock.price+=5;
  }
}
