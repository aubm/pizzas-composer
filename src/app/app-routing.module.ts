import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/composer/composer.module#ComposerModule'
      },
      {
        path: 'restaurants',
        loadChildren: 'app/restaurants/restaurants.module#RestaurantsModule'
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
