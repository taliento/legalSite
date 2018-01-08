import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { navbarFade, navbarBump } from '../shared/animations/navbar-animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [navbarFade, navbarBump]
})
export class NavbarComponent implements OnInit {

  state = 'show';
  bump = 'large';

  constructor(public el: ElementRef) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
   checkScroll() {
     const componentPosition = this.el.nativeElement.offsetTop
     const scrollPosition = window.pageYOffset;

     if(scrollPosition == 0) {
       this.state = 'show';
       this.bump = 'large';
       return;
     }

     if (scrollPosition > componentPosition + 100) {
       this.state = 'hide'
       this.bump = 'small';
     } else {
       this.state = 'show';
       this.bump = 'large';
     }

   }
}
