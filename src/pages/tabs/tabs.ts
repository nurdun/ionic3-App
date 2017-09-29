import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = UserPage;

  constructor() {

  }
}
