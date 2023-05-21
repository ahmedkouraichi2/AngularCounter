import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {
  selectedOption: string | null;
  selectedOptions: string[] = ['sprintId', 'issueId', 'tasks', 'resource', 'timestamp'];


  next(): void {
    console.log(this.selectedOptions); // Use the selectedOptions array as per your requirements
  }
  

  constructor(private route: ActivatedRoute, private router: Router) {
    this.selectedOption = null; 
  }

  ngOnInit(): void {
    this.selectedOptions = ['sprintId', 'issueId', 'tasks', 'resource', 'timestamp'];
    // Other initialization code
  }
  

  goBack(): void {
    this.router.navigate(['/method']);
  }
}
