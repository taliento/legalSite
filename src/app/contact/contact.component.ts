import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Header, Contact } from '../shared/models';
import { HeaderService } from '../shared/services';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private header: Header = new Header();

  constructor(private snackBar: MatSnackBar,
    private headerService: HeaderService) { }

  ngOnInit() { //FIXME service
    this.header.title = 'Contatti';
    this.header.card = true;
    this.header.contacts.push(new Contact('phone','011 28766'));
    this.header.contacts.push(new Contact('phone_android','333 0125513'));
    this.header.contacts.push(new Contact('email','mail@email.com'));

    this.headerService.setHeader(this.header);
  }

  sendEmail() {
    //TODO sendEmail

    this.snackBar.open("Inviato con successo!", "Chiudi", {
      duration: 2000,
    });
  }

}
