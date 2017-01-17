import { Injectable } from '@angular/core';
import {Store} from "./mock-store.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

const RESOURCE_NAME = 'resource';

@Injectable()
export class ResourceSettingsService {

  constructor() { }

}

export const StoreToControl = (store: Store, resourceFormGroup: FormGroup) => {
  if(!store[RESOURCE_NAME]) return;
  resourceFormGroup.controls['date'].reset(store[RESOURCE_NAME].date);
  resourceFormGroup.controls['text'].reset(store[RESOURCE_NAME].text);
};

export class ResourceFormGroup extends FormGroup{
  controls: {
    text: FormControl;
    date: FormControl;
  };

  constructor(){
    super({
      text: new FormControl('', Validators.maxLength(5)),
      date: new FormControl()
    });
  }
}
