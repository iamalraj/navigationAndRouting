import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Technology, technologies } from '../technologies';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  technologies = technologies;

  onSelect(technology: any) {
    this.router.navigate(['/technologies', technology.id]);
  }
}
