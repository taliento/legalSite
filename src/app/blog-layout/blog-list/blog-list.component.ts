import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { News } from '../../shared/models';
import { NewsService } from '../../shared/services';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  posts: Array<News> = [];
  selectedPost: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getAll().then(news => this.posts = news);

    this.route.parent.children
      .find(r => r.outlet === 'body')
      .params
      .subscribe((params: any) => {
        if (params.id) this.selectedPost = params.id;
      });
  }

  showPost(id: string) {
    this.selectedPost = id;
    this.router.navigate(['/main/blog', {outlets: {'body': [id]}}]);
  }

}
