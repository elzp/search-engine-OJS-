import { Component } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  placeholder: string = 'write sth';
  value: string = '';

  onKey(event) {
    // console.log("this.value",this.value, "ev.target" , event.target.value);
    if (this.value !== event.target.value.trim()) {
      this.value = event.target.value;
    }
    console.log(this.value);
  }
}
