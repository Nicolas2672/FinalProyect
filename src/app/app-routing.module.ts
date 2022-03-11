import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcargaComponent } from './components/acarga/acarga.component';
import { BregisterComponent } from './components/bregister/bregister.component';
import { CloginComponent } from './components/clogin/clogin.component';

const routes: Routes = [
  { path: "", component: AcargaComponent},
  { path: "carga", component: AcargaComponent},
  { path: "signin", component: BregisterComponent},
  { path: "login", component: CloginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
