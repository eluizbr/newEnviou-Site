import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import 'jquery';
import 'bootstrap';
import 'modernizr';
import 'template';

import { AppComponent }  from './app.component';
import { MainComponent } from '../app/layout/main.component';
import { MenuComponent } from '../app/layout/menu/menu.component';
import { BannerComponent } from '../app/layout/banner/banner.component';
import { FooterComponent } from '../app/layout/footer/footer.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ 
    AppComponent,
    MainComponent,
    MenuComponent,
    BannerComponent,
    FooterComponent,
],
bootstrap:    [ AppComponent ]
})
export class AppModule { }
