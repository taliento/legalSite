import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent} from './feature/feature.component';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { BlogBodyComponent } from './blog-layout/blog-body/blog-body.component';
import { BlogListComponent } from './blog-layout/blog-list/blog-list.component';

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
      },
      {
        path: 'feature/:id',
        component: FeatureComponent
      },
      {
        path: 'blog',
        component: BlogLayoutComponent,
        children: [
          {
            path: ':id',
            component: BlogBodyComponent,
            outlet: 'body'
          },
          {
            path: 'newsList',
            component: BlogListComponent,
            outlet: 'list'
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'main/home'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
