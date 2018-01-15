import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService, HeaderService } from '../../shared/services';
import { News, Header } from '../../shared/models';


@Component({
  selector: 'app-blog-body',
  templateUrl: './blog-body.component.html',
  styleUrls: ['./blog-body.component.scss']
})
export class BlogBodyComponent implements OnInit {

  private header: Header = new Header();

  currentPost: News;

  constructor(
    private route: ActivatedRoute,
    private newsSerivce: NewsService,
    private headerService: HeaderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: {id: string}) => {
      this.newsSerivce.getById(params.id).then((post) => {
        this.currentPost = post;
        this.setHeader();
      });
    });
  }

  setHeader () { //FIXME service
    this.header.title = this.currentPost.title;
    this.headerService.setHeader(this.header);
  }

}
