import { Component, OnInit } from '@angular/core';

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
