import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from'@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { TechnoListComponent } from './techno-list/techno-list.component';
import { TechnoDetailsComponent } from './techno-details/techno-details.component';
import { BusinessComponent } from './business/business.component';
import { UsersComponent } from './users/users.component';
import { JobListComponent } from './job-list/job-list.component';
import { HebergeComponent } from './heberge/heberge.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TechnoAddComponent,
    TechnoListComponent,
    TechnoDetailsComponent,
    BusinessComponent, 
    UsersComponent,
    JobListComponent,
    HebergeComponent,
    AppDetailsComponent,
    DaysAgoPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
