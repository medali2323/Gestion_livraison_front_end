import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GestionLivraisonServiceService } from './service/gestion-livraison-service.service';


import { FormsModule } from '@angular/forms';
import { Gouvernemant } from './models/gouvernemant';
import { Ville } from './models/villes';

import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
   
   
    
    
    LoginComponent,
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [GestionLivraisonServiceService,Gouvernemant,Ville],
  bootstrap: [AppComponent]
})
export class AppModule { }
