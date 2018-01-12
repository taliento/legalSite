import { Component, OnInit } from '@angular/core';
import { Contact } from '../shared/models';
import { ContactsService } from '../shared/services';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = [];
  addressList = [];

  constructor(private contactService: ContactsService) { }

  ngOnInit() { //TODO service
    
    this.contactService.getAll().then(contacts => {
      this.contacts = contacts;
    },
    error => {
      console.log(error);
    });
  }

}
