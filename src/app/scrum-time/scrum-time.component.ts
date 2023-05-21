import { Component } from '@angular/core';

@Component({
  selector: 'app-scrum-time',
  templateUrl: './scrum-time.component.html',
  styleUrls: ['./scrum-time.component.css']
})




export class ScrumTimeComponent{
    options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
availableOptions: string[] = [];
selectedOptions: string[] = [];

selectOptions() {
  this.selectedOptions = this.selectedOptions.concat(this.availableOptions);
  this.availableOptions = [];
}

deselectOptions() {
  this.availableOptions = this.availableOptions.concat(this.selectedOptions);
  this.selectedOptions = [];
}

}





