import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarksComponent } from './bookmarks.component';
import { PostsComponent } from './posts.component';
import { NewsComponent } from './news.component';
import { SearchComponent } from './search.component';
import { MyFilterPipe } from './my-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    BookmarksComponent,
    PostsComponent,
    NewsComponent,
    SearchComponent,
    MyFilterPipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
