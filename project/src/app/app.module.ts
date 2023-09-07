import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RoutingComponent } from './routing/routing.component';
import { MobileComponent } from './routing/mobile/mobile.component';
import { LaptopComponent } from './routing/laptop/laptop.component';
import { ComponentComponent } from './sharedmodule/component/component.component';
// import { CustomDirective } from './sharedmodule/custom.directive';
import { ModuleModule } from './sharedmodule/module/module.module';
import { FilterPipe } from './sharedmodule/filter.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    FilterPipe,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ModuleModule        //its shared modulee 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('aap.module.ts');
    
  }
 }
