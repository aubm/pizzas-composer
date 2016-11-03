import { NgModule } from '@angular/core';
import { ComposerComponent } from './composer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ComposerComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ComposerRoutingModule { }
