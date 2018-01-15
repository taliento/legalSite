import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  loading = true;

  newsList = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.loading = true;
    this.newsService.getAll().then((newsList) => {
      this.newsList = newsList;
      this.loading = false;
    });
  }

}
