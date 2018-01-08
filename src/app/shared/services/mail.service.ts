import { Injectable } from '@angular/core';
import { Mail } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class MailService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  sendMail(mail: Mail): Promise<string> {
    return this.http.post<Mail>(this.apiUrl + '/mail/sendMail', mail)
      .toPromise()
      .catch(this.handleError);
  }

  protected handleError(error: any): Promise<any> {// FIXME handle error
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message);
  }
}
