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
  <button (click)="disableForm()">Toggle disable form</button>
  `,
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  private tkForm: FormGroup;
  private disabled: boolean = false;

  constructor(private mockStoreService: MockStoreService) {
  }


  ngOnInit() {
    this.tkForm = new FormGroup({ //Can be moved to outside for configurability
      resource: new ResourceFormGroup()
    });
  }
///////////// For demo purposes /////////////////
  buttonClick(){
    this.mockStoreService.fetchData(fetchConfigFunction);
  }

  disableForm(){
    if(!this.disabled) this.tkForm.disable();
    else this.tkForm.enable();
    this.disabled = !this.disabled;
  }
}
