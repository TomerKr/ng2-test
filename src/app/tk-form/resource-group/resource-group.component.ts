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
    <button (click)="toggleDate()" >Toggle disable date</button>
  </tk-form-group>
  `,
  styleUrls: ['./resource-group.component.css']
})
export class ResourceGroupComponent implements OnInit, OnDestroy {

  @Input() resourceGroup: ResourceFormGroup;
  private subscription: Subscription;

  private disabled = false;

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

  toggleDate(){
    if(!this.disabled) this.resourceGroup.controls.date.disable();
    else this.resourceGroup.controls.date.enable();
    this.disabled = !this.disabled;
  }


}
