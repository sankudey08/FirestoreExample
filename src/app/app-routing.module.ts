import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { AuthGuard } from './shared/auth.guard';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { StudentComponent } from './students/student/student.component';
import { UserResolver } from './shared/user.resolver';


const routes: Routes = [
  // {
  //   path:'',
  //   component: LoginComponent
  // },
  // {
  //   path: 'student',
  //   component: StudentsComponent
  // }
  {path: '', redirectTo: 'signup', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent,canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent,canActivate: [AuthGuard] },
  { path: 'student', component: StudentsComponent,resolve: { data: UserResolver} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
