import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ApplyComponent } from './apply/apply.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    TeamComponent,
    ApplyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
