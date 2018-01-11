import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FeaturesService, HeaderService } from '../shared/services';
import { Tile, Header } from '../shared/models';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  private header: Header = new Header();
  tile: Tile;

  constructor(private current: ActivatedRoute,
     private router: Router,
     private headerService: HeaderService,
    private featuresService: FeaturesService) { }

  ngOnInit() { // TODO service

    this.current.params
   .switchMap((params: Params) => this.featuresService.getById(params['id']))
   .subscribe(
     tile => {
       this.tile = tile;
       this.setHeader();
     },
     error => {
       this.router.navigate(['']);
     });
  }

  setHeader () { //FIXME service
    this.header.title = this.tile.title;
    this.header.subtitle = this.tile.subtitle;
    this.headerService.setHeader(this.header);
  }

}
