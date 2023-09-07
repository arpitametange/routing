import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { RoutingComponent } from './routing.component';
import { RouterModule, Routes } from '@angular/router';
//lazy loading
let routes:Routes=[

 {path:'', component:RoutingComponent,children:[
  {path:'laptop',component:LaptopComponent},
  {path:'mobile',component:MobileComponent}
 ]}
]
//all component  should be in same folder 
//add all child component and main component in declaration and (remove from app.module.ts)
//also add export array in ngmodule
@NgModule({
  declarations: [  RoutingComponent,
    MobileComponent,
    LaptopComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ModuleModule { 
  constructor(){
    console.log('feature module');
    
  }
}
