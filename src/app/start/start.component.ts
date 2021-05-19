import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; //router Module

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goMain(): void{
    this.router.navigate(['main']);
  }
}
