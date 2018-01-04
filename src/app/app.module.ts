import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { routing } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
  MatInputModule
} from '@angular/material';


import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    FabButtonComponent,
    AboutComponent
  ],
  imports: [
    routing,
    BrowserModule,
    BrowserAnimationsModule,

    //materiale modules
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
