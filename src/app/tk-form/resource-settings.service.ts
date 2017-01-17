import { Injectable } from '@angular/core';
import {Store, MockStoreService} from "./mock-store.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Http} from "@angular/http";

const RESOURCE_NAME = 'resource';

@Injectable()
export class ResourceSettingsService {

}

export const StoreToControl = (store: Store, resourceFormGroup: FormGroup) => {
  if(!store[RESOURCE_NAME]) return;
  const date = store[RESOURCE_NAME].date;
  resourceFormGroup.controls['date'].reset(`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`);
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

