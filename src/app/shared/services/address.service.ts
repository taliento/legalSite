import { Injectable } from '@angular/core';
import { Address } from '../models';

@Injectable()
export class AddressService {

  constructor() { }

  getAll(): Promise<Array<Address>> {
    return new Promise<Array<Address>>((resolve,reject) => {
      try {
        let addressList = [];

        addressList.push(new Address('location_on','che ne so'));
        addressList.push(new Address('location_city','da qualche parte'));

        resolve(addressList);
      } catch (error) {
        reject(error);
      }
    });
  }

}
