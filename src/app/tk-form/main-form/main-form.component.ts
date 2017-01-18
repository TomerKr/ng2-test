import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {ResourceFormGroup, StoreToControl, fetchConfigString, fetchConfigFunction} from "../resource-settings.service";
import {MockStoreService} from "../mock-store.service";

@Component({
  selector: 'tk-main-form',
  template: `
   <form [formGroup]="tkForm">
      <tk-resource-group [resourceGroup]="tkForm.controls['resource']"></tk-resource-group>    
  </form>
  <button (click)="buttonClick()">Get data by function</button>
  `,
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  private tkForm: FormGroup;

  constructor(private mockStoreService: MockStoreService) {
  }


  ngOnInit() {
    this.tkForm = new FormGroup({
      resource: new ResourceFormGroup()
    });
    this.mockStoreService.fetchData(fetchConfigString);
  }

  buttonClick(){
    this.mockStoreService.fetchData(fetchConfigFunction);
  }
}
