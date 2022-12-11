import { Component } from '@angular/core';
import { prepareDataForRegExp } from './functions';

@Component({
  selector: 'my-posts',
  templateUrl: './posts.component.html',
})
export class PostsComponent {
  postsList = [
    'TDD w praktyce',
    'Czym jest technika pomodoro',
    'Nauka programisty w 2020r.',
    'Czy warto uczyć się Reacta',
    'Poznaj Przeprogramowanych',
  ];
  typeOfFilteredData = 'flatarray';
  regex = new RegExp('');

  updateData(data: string) {
    const data1 = prepareDataForRegExp(data);
    this.regex = new RegExp(`${data1}`, 'i');
  }
}
