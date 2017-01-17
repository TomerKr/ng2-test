import {Component, OnInit, Input} from '@angular/core';
import {MockStoreService} from "../mock-store.service";
import {StoreToControl, ResourceFormGroup} from "../resource-settings.service";

@Component({
  selector: 'tk-resource-group',
  template: `
  <tk-form-group>
    <input type="text" [formControl]="resourceGroup.controls.text"/>
    <input type="date" [formControl]="resourceGroup.controls.date"/>
  </tk-form-group>
  `,
  styleUrls: ['./resource-group.component.css']
})
export class ResourceGroupComponent implements OnInit {

  @Input() resourceGroup: ResourceFormGroup;

  constructor(private mockStoreService: MockStoreService) { }

  ngOnInit() {
    this.mockStoreService.getStore().subscribe((store) => {
      StoreToControl(store,this.resourceGroup);
    })
  }

}
