import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor() { 
    
  }

  getContacts():{ firstName: string; lastName: string; phone: number; status: string}[]{
    let contacts=[
      {firstName : "Aoui",lastName:"Rachid",phone:839819381231839,status:"inactive"},
      {firstName : "Aoui",lastName:"Othmane",phone:839819381231839,status:"active"},
      {firstName : "Aoui",lastName:"Rida",phone:839819381231839,status:"inactive"},
      {firstName : "Aoui",lastName:"Noussaiba",phone:839819381231839,status:"active"},
      {firstName : "Aoui",lastName:"Brahim",phone:839819381231839,status:""},
      {firstName : "Bouimane",lastName:"Naima",phone:839819381231839,status:""}
    ]
    return contacts;
  }


}
