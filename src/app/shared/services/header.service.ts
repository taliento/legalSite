import { Injectable } from '@angular/core';
import { Header } from '../models';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class HeaderService {
  header = new Subject<Header>();

  constructor() { }

  setHeader(header: Header) {
    this.header.next(header);
  }

}
