import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AttendanceComponent} from './attend/attend.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,

    UploadfilesComponent,
    AttendanceComponent,
    HomeComponent,
    AttendanceComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
