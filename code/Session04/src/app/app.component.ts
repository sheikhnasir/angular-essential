import { Component, OnInit } from '@angular/core';
import { Stock } from '../app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Stock Market App';

  public stockObj!: Stock;
  public counter:number=1;
  public stock!: Stock;

  ngOnInit(): void {
    this.stockObj = new Stock('Test Stock Company', 'TSC', 95, 86);
  }

  testMethod() {
    console.log('Test method in AppComponent triggered');
  }
  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
    }
  changeStockPrice(){
    this.stock.price+=10;
  }
  changeStockObject(){
    this.stock=new Stock ('New Stock'+this.counter++,'tsc',90,80)
  }
}
