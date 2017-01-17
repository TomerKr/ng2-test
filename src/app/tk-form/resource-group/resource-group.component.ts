import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MockStoreService} from "../mock-store.service";
import {StoreToControl} from "../resource-settings.service";

@Component({
  selector: 'tk-resource-group',
  template: `
  <div>
    <input type="text" [formControl]="resourceGroup.controls['text']"/>
    <input type="date" [formControl]="resourceGroup.controls['date']"/>
  </div>
  `,
  styleUrls: ['./resource-group.component.css']
})
export class ResourceGroupComponent implements OnInit {

  @Input() resourceGroup: FormGroup;

  constructor(private mockStoreService: MockStoreService) { }

  ngOnInit() {
    this.mockStoreService.getStore().then((store) => {
      StoreToControl(store,this.resourceGroup);
    })
  }

}
