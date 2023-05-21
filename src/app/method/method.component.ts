import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface User {
  name: string;
}

@Component({
  selector: 'app-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.css']
})
export class MethodComponent implements OnInit {
  myControl = new FormControl<string | User>('');
  options: User[] = [
    { name: 'Scrum' },
    { name: 'extreme programming' },
    { name: 'Kanban' },
    { name: 'Crystal' }
  ];
  filteredOptions!: Observable<User[]>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      })
    );
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();
    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  navigateToDataset() {
    this.router.navigateByUrl('/dataset', { state: { selectedOption: this.myControl.value } });
  }
  
}
