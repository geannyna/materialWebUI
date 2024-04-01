import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    QRCodeModule,
    FormsModule,
    MatTableModule, 
  ],
  providers: [],
  bootstrap: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
