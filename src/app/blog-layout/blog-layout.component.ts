import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/services';
import { Header } from '../shared/models';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.scss']
})
export class BlogLayoutComponent implements OnInit {

  private header: Header = new Header();

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.setHeader();
  }

  setHeader () { //FIXME service
    this.header.title = 'Blog';
    this.headerService.setHeader(this.header);
  }

}
