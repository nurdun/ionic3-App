import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentPage } from './content';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentPage),
  ],
})
export class ContentPageModule {}
