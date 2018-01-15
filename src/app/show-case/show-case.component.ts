import { Component, OnInit} from '@angular/core';
import { Tile } from '../shared/models';
import { FeaturesService } from '../shared/services';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {

  tiles: Array<Tile> = [];
  loading: boolean = true;

  constructor(private featuresService: FeaturesService) { }

  ngOnInit() {
    this.loadtiles();
  }

  loadtiles() { //FIXME service

    this.loading = true;

    this.featuresService.getAll()
    .then(
      tiles => {
        this.tiles = tiles;
        this.loading = false;
      },
      error => {
        console.log(error);
      });

  }

}
