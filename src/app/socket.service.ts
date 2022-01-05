import { Injectable } from '@angular/core';
import { io, Socket }from 'socket.io-client';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:4000'
  private socket: Socket;

  public stockList$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
    this.socket = io('http://localhost:4000');
   }

  // listen(eventName: string) {
  //   return new Observable((subscriber) => {
  //     this.socket.on(eventName, (data) => {
  //       subscriber.next(data)
  //     })
  //   })
  // }

  // emit(eventName: string, data: any) {
  //   this.socket.emit(eventName, data);
  // }

  public getStockList = () => {
    this.socket.on('list', (data) => {
      console.log('subscribe');
      this.stockList$.next(data)
    })
    return this.stockList$.asObservable();
  }
}
