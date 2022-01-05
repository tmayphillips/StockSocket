import { Injectable } from '@angular/core';
import {io, Socket} from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:4000'
  private socket: Socket = io(this.url)

  public stockList$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  public getStockList = () => {
    this.socket.on('list', (data) => {
      this.stockList$.next(data)
    })
    return this.stockList$.asObservable();
  }
}
