import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { HebergeComponent } from './heberge/heberge.component';
import { HomeComponent } from './home/home.component';
import { TechnoAddComponent } from './techno-add/techno-add.component';
import { TechnoListComponent } from './techno-list/techno-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-techno', component: TechnoAddComponent},
  {path: 'all-technos', component: TechnoListComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'users', component: UsersComponent},
  {path: 'heberge', component:HebergeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
