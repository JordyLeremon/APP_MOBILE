import { Component } from '@angular/core';
import { NewsPage } from '../news/news';

import { SqlitePage } from '../sqlite/sqlite';
import { NativeStorage } from '@ionic-native/native-storage';
import { NativestoragePage } from '../nativestorage/nativestorage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SqlitePage;
  tab2Root = NativestoragePage;
  tab3Root = NewsPage;
  

  constructor() {

  }
}
