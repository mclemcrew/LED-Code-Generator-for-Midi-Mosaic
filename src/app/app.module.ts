import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppComponent, CodeGeneration } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';
import {MatDialogModule} from '@angular/material/dialog';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    CodeGeneration  
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    MatDialogModule,
    ClipboardModule
  ],
  entryComponents: [CodeGeneration],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
