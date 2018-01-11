import { trigger, state, animate, transition, style, query, group } from '@angular/animations';


export const tileBump = trigger('tileBump', [
  state('inactive',   style({backgroundColor: '#eee',
        transform: 'scale(1)'})),
  state('active',   style({ backgroundColor: '#cfd8dc',
        transform: 'scale(1.05)'})),
  transition('inactive => active', animate('100ms ease-in')),
  transition('active => inactive', animate('100ms ease-out'))
]);
