import { DatePipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, UpperCasePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,DatePipe,UpperCasePipe,NgIf,NgSwitchCase,NgSwitch,NgSwitchDefault],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  // firstName : string;
  // lastName : string;
  // phone : number;
   date : Date;
   contacts: { firstName: string; lastName: string; phone: number; status: string}[];
  
  constructor(private contactService:ContactService) {
    // this.firstName = "";
    // this.lastName = "";
    // this.phone = 0;
     this.date = new Date();
     this.contacts = this.contactService.getContacts();
}
  
  ngOnInit() {
    // this.firstName = "Aoui";
    // this.lastName = "Rachid";
    // this.phone = 123456789;
    this.date = new Date();
  }
//function remove a contact
  removeContact(i:number){
    this.contacts.splice(i,1);
  }
}
