import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorInitializedStoreComponent } from './components/constructor-initialized-store/constructor-initialized-store.component';

const routes: Routes = [
  {
    path: '',
    component: ConstructorInitializedStoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
