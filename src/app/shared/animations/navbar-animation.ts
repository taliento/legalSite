import { trigger, state, animate, transition, style, query, group } from '@angular/animations';

export const navbarFade = trigger('navbarFade', [
  state('hide',   style({ opacity: 0, height: '0px' })),
  state('show',   style({ opacity: 1 })),
  // route 'enter' transition
  transition('show => hide', animate('0.5s ease-in-out')),
  transition('hide => show', animate('0.5s ease-in-out'))
]);

export const navbarBump = trigger('navbarBump', [
  state('small',   style({ fontSize: '18px'})),
  state('large',   style({ fontSize: '36px'})),
  // route 'enter' transition
  transition('large <=> small', animate(500))
  // ,
  // transition('small => large', animate('0.5s ease-in-out'))
]);
