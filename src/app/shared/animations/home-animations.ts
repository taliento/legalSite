import { trigger, state, animate, transition, style, query, group } from '@angular/animations';

export const buttonFade = trigger('buttonFade', [
  state('hide',   style({ opacity: 0 })),
  state('show',   style({ opacity: 1 })),
  transition('show => hide', animate('0.5s ease-in-out')),
  transition('hide => show', animate('0.5s ease-in-out'))
]);
