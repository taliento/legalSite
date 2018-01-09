import { Component, OnInit } from '@angular/core';
import { Header } from '../shared/models';
import { HeaderService } from '../shared/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private header: Header = new Header();

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.setHeader();
  }

  setHeader() {//FIXME service
    this.header.title = 'Avvocato pinco';
    this.header.subtitle = 'faccio cose di legge..';
    this.headerService.setHeader(this.header);
  }

}
