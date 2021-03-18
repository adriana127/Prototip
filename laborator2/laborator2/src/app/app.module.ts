import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FileSizePipe } from './pipes/filesizepipe';
import { HttpClientModule } from '@angular/common/http';
import { fakeBackendProvider } from '../app/pipes/userDataPipe'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    ImageUploadComponent,
    HeaderComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule ,
    MatTableModule,
    MatCheckboxModule,MatCardModule,MatInputModule,MatIconModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
