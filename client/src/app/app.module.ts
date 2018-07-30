import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { LocationComponent } from './location/location.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2CarouselamosModule
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }

