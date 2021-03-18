import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/authorization/auth.guard';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { LoginComponent } from './components/login/login.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'image-upload', component: ImageUploadComponent ,canActivate: [AuthGuard]},
  { path: 'table', component: TableComponent ,canActivate: [AuthGuard]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
