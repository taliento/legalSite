import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: 'main',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main/home'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
