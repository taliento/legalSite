import { Component, OnInit, ElementRef, HostListener  } from '@angular/core';
import { buttonFade } from '../shared/animations/home-animations';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  animations: [buttonFade]
})
export class MainLayoutComponent implements OnInit {

  state = 'hide';

  constructor(public el: ElementRef) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
   checkScroll() {
     const componentPosition = this.el.nativeElement.offsetTop
     const scrollPosition = window.pageYOffset;

     if (scrollPosition > componentPosition) {
       this.state = 'show'
     } else {
       this.state = 'hide';
     }

   }

  scrollTop() {
    scrollTo(0,0);
  }

}
