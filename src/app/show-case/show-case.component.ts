import { Component, OnInit} from '@angular/core';
import { Tile } from '../shared/models';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {

  tiles: Array<Tile> = [];
  loading: boolean = false;

  constructor( ) { }

  ngOnInit() {
    this.loadtiles();
  }

  loadtiles() { //FIXME service

    this.loading = true;

    setTimeout(() => {
      this.tiles.push(new Tile('boh','shopping_cart',
      'Maecenas rhoncus, metus vel luctus feugiat, arcu odio hendrerit odio'
      ));
      this.tiles.push(new Tile('La legalità','euro_symbol','some text happens'));
      this.tiles.push(new Tile('Diritto di famiglia','pan_tool','some text happens'));
      this.tiles.push(new Tile('Successioni','shopping_cart','some text happens'));
      this.tiles.push(new Tile('Pareri','euro_symbol','some text happens'));
      this.tiles.push(new Tile('ah boh','pan_tool','some text happens'));
      this.tiles.push(new Tile('boh','shopping_cart','some text happens'));
      this.tiles.push(new Tile('euro','euro_symbol','some text happens'));
      this.loading = false;
    }, 1000);


  }

}
