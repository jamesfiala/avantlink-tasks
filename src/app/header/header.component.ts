import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
})

export class HeaderComponent implements OnInit {
  githubRepo: string = null;

  //Syntax for constants
  private static get GITHUB_REPO(): string { return "https://github.com/jamesfiala/avantlink-tasks"; }

  constructor() {}

  ngOnInit() {
	  this.githubRepo = HeaderComponent.GITHUB_REPO;
  }

}
