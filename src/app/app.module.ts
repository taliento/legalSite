import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; //TODO INTERCEPTOR
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderService, MailService, FeaturesService, ContactsService } from './shared/services';
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
  MatProgressBarModule
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
import { FeatureComponent } from './feature/feature.component';
import { ContactListComponent } from './contact-list/contact-list.component';


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
    ContactListComponent
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
    MatProgressBarModule
  ],
  providers: [
    Title,
    HeaderService,
    MailService,
    FeaturesService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
