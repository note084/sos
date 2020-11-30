import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ajax, css } from "jquery";
import { OurworkComponent } from './ourwork/ourwork.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactFormComponent } from './contact-form/contact-form.component';



const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'capabilites', component: CapabilitiesComponent },
  { path: 'ourwork', component: OurworkComponent },
  { path: 'aboutus', component: AboutUsComponent }, //visits localhost/about-us
  { path: 'contactus', component: ContactUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CapabilitiesComponent,
    ContactUsComponent,
    HomePageComponent,
    NavbarComponent,
    OurworkComponent,
    FooterComponent,
    SliderComponent,
    ContactFormComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), //to register paths
    SlickCarouselModule,
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
