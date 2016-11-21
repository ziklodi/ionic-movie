import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { DiscoverPage } from '../pages/discover/discover';
import { TabsPage } from '../pages/tabs/tabs';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { MovieService } from '../providers/movie-service';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    DiscoverPage,
    TabsPage,
    MovieDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    DiscoverPage,
    TabsPage,
    MovieDetailPage
  ],
  providers: [MovieService]
})
export class AppModule {}
