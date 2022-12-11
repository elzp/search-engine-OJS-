import { Component } from '@angular/core';
import { prepareDataForRegExp } from './functions';

@Component({
  selector: 'my-bookmarks',
  templateUrl: './bookmarks.component.html',
})
export class BookmarksComponent {
  bookmarks = [
    'Przeprogramowani.pl',
    'overme+nt.com',
    'smyrdek.com',
    'algo(sm=art.pl/%',
    'Przepro+gramowani YouTube',
    'google.com/sth',
    '\\d^gri@y',
  ];
  typeOfFilteredData = 'flatarray';
  regex = new RegExp('');

  updateData(data: string) {
    const data1 = prepareDataForRegExp(data);
    this.regex = new RegExp(`${data1}`, 'i');
  }
}
