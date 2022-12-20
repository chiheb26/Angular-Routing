import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,IDeactivateComponent {

  firstName?:any;
  lastName?:any;
  country?:any;
  subject?:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ProcessForm(){
    //Write logic to process the form
    this.router.navigate(['About']);
  }

  canExit(){
    if(this.firstName || this.lastName || 
      this.country || this.subject){
      return  confirm('You have unsaved changes. Do you really want to discard these changes?');
    }else{
      return true;
    }
  }

}
