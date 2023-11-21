import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
//import { HeaderComponent } from './header/header.component';
//import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
//const routes: Routes = [];

const routes: Routes = [
  { path: 'splash', component: SplashComponent },
  { path: 'main', component: MainComponent }, // Replace 'MainComponent' with your actual main component
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
