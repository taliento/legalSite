import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tile } from '../../shared/models';
import { FeaturesService } from '../../shared/services';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

  posts: Array<Tile> = [];
  selectedPost: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private featureService: FeaturesService) { }

  ngOnInit() {
    this.featureService.getAll().then(news => this.posts = news);

    this.route.parent.children
      .find(r => r.outlet === 'body')
      .params
      .subscribe((params: any) => {
        if (params.id) this.selectedPost = params.id;
      });
  }

  showPost(id: string) {
    this.selectedPost = id;
    this.router.navigate(['/main/feature', {outlets: {'body': [id]}}]);
  }

}
