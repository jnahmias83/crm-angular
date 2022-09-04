import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.css'],
})
export class ShowContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private ctsservice: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.ctsservice.getContacts();''
  }
}
