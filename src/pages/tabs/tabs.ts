import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { DiscoverPage } from '../discover/discover';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = SearchPage;
  tab2Root: any = DiscoverPage;

  constructor() {

  }
}
