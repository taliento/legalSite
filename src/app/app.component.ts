import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`
})
export class AppComponent  implements OnInit{
  title = 'Legal site';

  public constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
