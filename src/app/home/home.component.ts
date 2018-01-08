import { Component, OnInit } from '@angular/core';
import { Header } from '../shared/models';
import { HeaderService } from '../shared/services';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private header: Header = new Header();

  constructor(private headerService: HeaderService,
     private live: LiveAnnouncer) { }

  ngOnInit() { //FIXME service

    this.header.title = 'Avvocato pinco';
    this.header.subtitle = 'faccio cose di legge..';
    this.header.button.action = '/main/about';
    this.header.button.label = 'Chi sono';

    this.headerService.setHeader(this.header);


  }

  announceText(message: string) {
    this.live.announce(message);
  }

}
