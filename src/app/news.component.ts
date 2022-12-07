import { Component } from '@angular/core';

@Component({
  selector: 'my-news',
  templateUrl: './news.component.html',
})
export class NewsComponent {
  newsList = [
    {
      head: 'Przeprogramowani przebijają 4k subskrypcji!',
      lead: 'Znany i lubiany projekt Przeprogramowani przebił właśnie kolejną granicę',
    },
    {
      head: 'Nowa książka współtwórcy Reacta',
      lead: 'Poznaj książkę, która pomoże tysiącom programistów JavaScript',
    },
    {
      head: 'Dekoratory zatrzymane! Jaka czeka je przyszłość?',
      lead: 'Dowiedz się, dlaczego praca nad dekoratorami została wstrzymana',
    },
  ];
  regex = new RegExp('');
  typeOfFilteredData = 'flatobject';

  updateData(data: string) {
    this.regex = new RegExp(data, 'i');
  }
}
