import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { navbarAnimation } from '../shared/animations/fade-animation';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [navbarAnimation]
})
export class NavbarComponent implements OnInit {

  state = 'show'

  constructor(public el: ElementRef) { }

  ngOnInit() { }

  @HostListener('window:scroll', ['$event'])
   checkScroll() {
     const componentPosition = this.el.nativeElement.offsetTop
     const scrollPosition = window.pageYOffset;

     if(scrollPosition == 0) {
       this.state = 'show';
       return;
     }

     if (scrollPosition > componentPosition + 100) {
       this.state = 'hide'
     } else {
       this.state = 'show'
     }

   }
}
