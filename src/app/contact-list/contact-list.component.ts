import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  addressList = [];

  constructor() { }

  ngOnInit() { //TODO service
    this.contacts.push(new Contact('phone','011 28766'));
    this.contacts.push(new Contact('phone_android','333 0125513'));
    this.contacts.push(new Contact('email','mail@email.com'));
  }

}
