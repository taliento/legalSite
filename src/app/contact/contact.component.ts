import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Header, Contact, Mail } from '../shared/models';
import { HeaderService, MailService } from '../shared/services';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  private header: Header = new Header();
  private mail: Mail = new Mail();
  private contactFormGroup: FormGroup;

  constructor(private snackBar: MatSnackBar,
    private headerService: HeaderService,
    private mailService: MailService) { }

  ngOnInit() {
    this.setHeader();

    this.contactFormGroup = new FormGroup({
      'email' : new FormControl(
        this.mail.from,
        [
          Validators.required,
          Validators.email
        ]
      ),
      'name': new FormControl(this.mail.name, Validators.required),
      'surname': new FormControl(this.mail.surname, Validators.required),
      'text': new FormControl(this.mail.text, Validators.required)
    });

  }

  get name() { return this.contactFormGroup.get('name'); }

  get email() { return this.contactFormGroup.get('email'); }

  get surname() { return this.contactFormGroup.get('surname'); }

  get text() { return this.contactFormGroup.get('text'); }

  setHeader () { //FIXME service
    this.header.title = 'Contatti';
    this.header.card = true;
    this.header.contacts.push(new Contact('phone','011 28766'));
    this.header.contacts.push(new Contact('phone_android','333 0125513'));
    this.header.contacts.push(new Contact('email','mail@email.com'));
    this.headerService.setHeader(this.header);
  }

  sendEmail() {
    
    this.mailService.sendMail(this.mail).then(response => {
      this.snackBar.open(response, "Chiudi", {
        duration: 2000,
      });
    }, error => {
      console.log(error);
      this.snackBar.open("Errore! "+error, "Chiudi");
    });
  }

}
