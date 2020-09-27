import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConstructorInitializedStoreComponent } from './components/constructor-initialized-store/constructor-initialized-store.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructorInitializedStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
