import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StockSocket';
  stockList: string[] = [];

  constructor(private socketService: SocketService) {  }

  ngOnInit() {
    // this.socketService.getStockList().subscribe((data: any) => console.log(data));
    this.socketService.listen('list').subscribe((data: any) => {
      this.stockList = data.symbols;
    })
  }

  handleChange($event: Event) {
    console.log(($event.target as HTMLInputElement).value);
    this.socketService.emit('historical', ($event.target as HTMLInputElement).value);
    this.socketService.listen('historical').subscribe((data) => {
      console.log(data)
    })
  }

  getCurrent($event: Event) {
    this.socketService.emit('live', ($event.target as HTMLElement).innerText);
    this.socketService.listen('live').subscribe((data) => {
      console.log(data);
    })
  }
}
