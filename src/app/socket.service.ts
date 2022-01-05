import { Injectable } from '@angular/core';
import io from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'http://localhost:4000'
  private socket: any

  constructor() { }
}
