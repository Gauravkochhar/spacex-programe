import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WelcomePageComponent },
  { path: 'mission', loadChildren: () => import('./modules/space-mission/space-mission.module').then(m => m.SpaceMissionModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
