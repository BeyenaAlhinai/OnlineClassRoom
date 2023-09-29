import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadfilesComponent } from './uploadfiles/uploadfiles.component';

import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AttendanceComponent } from './attend/attend.component';




const routes: Routes = [

  { path: 'home', component: HomeComponent },
    { path: 'uploadfiles', component: UploadfilesComponent },
    { path : 'attend', component :AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
