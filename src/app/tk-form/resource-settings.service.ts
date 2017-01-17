import { Injectable } from '@angular/core';
import {Store} from "./mock-store.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

const RESOURCE_NAME = 'resource';

@Injectable()
export class ResourceSettingsService {

  constructor() { }

}

export const StoreToControl = (store: Store, resourceFormGroup: FormGroup) => {
  resourceFormGroup.controls['date'].reset(store[RESOURCE_NAME].date);
  resourceFormGroup.controls['text'].reset(store[RESOURCE_NAME].text);
};

export const resourceFormGroup = new FormGroup({
  text: new FormControl('', Validators.maxLength(5)),
  date: new FormControl()
});

