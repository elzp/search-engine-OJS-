import { Component } from '@angular/core';

@Component({
  selector: 'my-bookmarks',
  templateUrl: './bookmarks.component.html'
})
export class BookmarksComponent  {

  bookmarks = [
    'Przeprogramowani.pl',
    'overment.com',
    'smyrdek.com',
    'algosmart.pl',
    'Przeprogramowani YouTube'
  ]
  
}
