import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  placeholder: string = 'write sth';
  value: string = '';
  @Output() sendSearchValueEvent = new EventEmitter<string>();

  onKey(event) {
    if (this.value !== event.target.value.trim()) {
      this.value = event.target.value;
      this.sendSearchValueEvent.emit(this.value);
    }
  }
}
