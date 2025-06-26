import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsPageComponent } from './pages/jobs-page/jobs-page.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { CreateJobModalComponent } from './components/create-job-modal/create-job-modal.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CompanyStatsComponent } from './components/company-stats/company-stats.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    JobsPageComponent,
    CompanyProfileComponent,
    CreateJobModalComponent,
    NavigationComponent,
    CompanyStatsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
