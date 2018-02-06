import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS
} from '@angular/common/http'; //TODO INTERCEPTOR
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HeaderService,
  MailService,
  FeaturesService,
  ContactsService,
  AddressService,
  NewsService
} from './shared/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//material modules
import {
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
  MatListModule,
  MatGridListModule,
  MatProgressBarModule,
  MatSidenavModule
} from '@angular/material';


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { TileComponent } from './tile/tile.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { BlogLayoutComponent } from './blog-layout/blog-layout.component';
import { BlogBodyComponent } from './blog-layout/blog-body/blog-body.component';
import { BlogListComponent } from './blog-layout/blog-list/blog-list.component';
import { FeatureLayoutComponent } from './feature-layout/feature-layout.component';
import { FeatureComponent } from './feature-layout/feature/feature.component';
import { FeatureListComponent } from './feature-layout/feature-list/feature-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FabButtonComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ShowCaseComponent,
    TileComponent,
    FeatureComponent,
    ContactListComponent,
    NewsComponent,
    NewsDetailComponent,
    BlogLayoutComponent,
    BlogBodyComponent,
    BlogListComponent,
    FeatureLayoutComponent,
    FeatureListComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    //materiale modules
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSidenavModule
  ],
  providers: [
    Title,
    HeaderService,
    MailService,
    FeaturesService,
    ContactsService,
    AddressService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
