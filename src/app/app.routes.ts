import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { QRCodeModule } from 'ngx-qrcode';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    //QRCodeModule,
  ],
  exports:[RouterModule]
})
export class AppRoutesModule { }