import { Component, OnInit} from '@angular/core';
import { Header } from '../shared/models';
import { HeaderService } from '../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private header: Header = new Header();

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.setHeader();
  }

  setHeader() { //FIXME service
    this.header.title = 'Avvocato pinco';
    this.header.subtitle = 'faccio cose di legge..';
    this.header.button.action = '/main/about';
    this.header.button.label = 'Chi sono';
    this.headerService.setHeader(this.header);
  }

}
