import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {MockStoreService} from "../mock-store.service";
import {StoreToControl, ResourceFormGroup, fetchConfigString} from "../resource-settings.service";
import {Subscription} from "rxjs";

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
export class ResourceGroupComponent implements OnInit, OnDestroy {

  @Input() resourceGroup: ResourceFormGroup;
  private subscription: Subscription;

  constructor(private mockStore: MockStoreService) { }

  ngOnInit() {
    this.subscription = this.mockStore.getStore().subscribe((store) => {
      StoreToControl(store,this.resourceGroup);
    });
    this.mockStore.fetchData(fetchConfigString);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
