import { Component } from '@angular/core';

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
    this.regex = new RegExp(data, 'i');
  }
}
