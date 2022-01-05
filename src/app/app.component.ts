import { Component, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StockSocket';

  constructor(private socketService: SocketService) {  }

  ngOnInit() {
    // this.socketService.getStockList().subscribe((data: any) => console.log(data));
    this.socketService.getStockList().subscribe((data) => {
      console.log(data);
    })
  }
}
