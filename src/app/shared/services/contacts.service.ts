import { Injectable } from '@angular/core';
import { Contact } from '../models';

@Injectable()
export class ContactsService {

  constructor() { }

  getAll(): Promise<Array<Contact>> {
    return new Promise<Array<Contact>>((resolve,reject) => {
      try {
        let contacts = [];

        contacts.push(new Contact('phone','011 28766'));
        contacts.push(new Contact('phone_android','333 0125513'));
        contacts.push(new Contact('email','mail@email.com'));

        resolve(contacts);
      } catch (error) {
        reject(error);
      }
    });
  }

}
