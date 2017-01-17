import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ResourceFormGroup} from "../resource-settings.service";

@Component({
  selector: 'tk-main-form',
  template: `
   <form [formGroup]="tkForm">
      <tk-resource-group [resourceGroup]="tkForm.controls['resource']"></tk-resource-group>    
  </form>  
  `,
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  private tkForm: FormGroup;

  constructor() {
  }


  ngOnInit() {
    this.tkForm = new FormGroup({
      resource: new ResourceFormGroup()
    });
  }

}
