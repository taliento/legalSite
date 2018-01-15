import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../shared/models';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
