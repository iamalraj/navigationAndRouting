import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Technology, technologies } from '../technologies';

@Component({
  selector: 'app-tech-details',
  templateUrl: './tech-details.component.html',
  styleUrls: ['./tech-details.component.css'],
})
export class TechDetailsComponent implements OnInit {
  public tech: any;
  constructor(private router: ActivatedRoute, private route: Router) {}

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.tech = technologies.find((tech) => tech.id === idFromRoute);
  }
  goBack() {
    this.route.navigate(['../']);
  }
}
