import { Component, OnInit } from '@angular/core';
import { Header, Tail } from '../shared/models';
import { HeaderService } from '../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private header: Header = new Header();
  tails: Array<Tail> = [];
  loading: boolean = false;

  constructor(private headerService: HeaderService) { }

  ngOnInit() {

    this.setHeader();
    this.loadTails();
  }

  setHeader() { //FIXME service
    this.header.title = 'Avvocato pinco';
    this.header.subtitle = 'faccio cose di legge..';
    this.header.button.action = '/main/about';
    this.header.button.label = 'Chi sono';
    this.headerService.setHeader(this.header);
  }

  loadTails() { //FIXME service

    this.loading = true;

    setTimeout(() => {
      this.tails.push(new Tail('boh','shopping_cart',
      'Maecenas rhoncus, metus vel luctus feugiat, arcu odio hendrerit odio, sed fermentum mauris nibh a ex. Nunc faucibus fermentum metus, mattis condimentum libero gravida et. Nullam non eros ut ipsum dictum maximus ut ut nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Orci varius natoque'
      ));
      this.tails.push(new Tail('euro','euro_symbol','some text happens'));
      this.tails.push(new Tail('ah boh','pan_tool','some text happens'));
      this.tails.push(new Tail('boh','shopping_cart','some text happens'));
      this.tails.push(new Tail('euro','euro_symbol','some text happens'));
      this.tails.push(new Tail('ah boh','pan_tool','some text happens'));
      this.tails.push(new Tail('boh','shopping_cart','some text happens'));
      this.tails.push(new Tail('euro','euro_symbol','some text happens'));
      this.loading = false;
    }, 1000);


  }


}
