import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { WizardRoutingModule } from './wizard-routing.module';

import { WizardComponent } from './wizard.component';
import { WizardControllerComponent } from './components/wizard-controller/wizard-controller.component';


@NgModule({
  declarations: [
    WizardComponent,
    WizardControllerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WizardRoutingModule
  ]
})
export class WizardModule {
}
