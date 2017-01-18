import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'tk-form-group',
  template: `
    <div>
      <ng-content></ng-content>    
    </div>
  `,
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
