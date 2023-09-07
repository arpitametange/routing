import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazy loadingggg syntax 
  {path:'home', loadChildren: () => import('./routing/module.module').then(x => x.ModuleModule)}

];
//PREALOADING SYNTAX
@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log('apprtoungmodule.ts');
    
  }
 }
