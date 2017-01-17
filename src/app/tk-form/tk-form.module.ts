import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceGroupComponent } from './resource-group/resource-group.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { DateWidgetComponent } from './date-widget/date-widget.component';
import { TextWidgetComponent } from './text-widget/text-widget.component';
import { MainFormComponent } from './main-form/main-form.component';
import {ResourceSettingsService} from "./resource-settings.service";
import {MockStoreService} from "./mock-store.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ResourceGroupComponent, FormGroupComponent, DateWidgetComponent, TextWidgetComponent, MainFormComponent],
  providers: [ResourceSettingsService,MockStoreService],
  exports: [MainFormComponent]
})
export class TkFormModule { }
