import { Component, OnInit, Input, ElementRef, HostListener  } from '@angular/core';
import { Tile } from '../shared/models';
import { tileBump } from '../shared/animations/tiles-animation';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  animations: [tileBump]
})
export class TileComponent implements OnInit {

  state: string = "inactive";

  @Input() tile: Tile;

  constructor(public el: ElementRef) { }

  @HostListener('mouseover')
  onMouseOver() {
    this.state = "active";
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.state = "inactive";
  }

  ngOnInit() {
  }

}
