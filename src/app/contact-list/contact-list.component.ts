import { Component, OnInit } from '@angular/core';
import { ContactsService, AddressService } from '../shared/services';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  addressList = [];

  constructor(private contactService: ContactsService, private addressService: AddressService) { }

  ngOnInit() { //TODO service

    this.contactService.getAll().then(contacts => {
      this.contacts = contacts;
    },
    error => {
      console.log(error);
    });

    this.addressService.getAll().then(addressList => {
      this.addressList = addressList;
    },
    error => {
      console.log(error);
    });

  }

}
