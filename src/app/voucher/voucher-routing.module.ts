import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { DebitnoteComponent } from './debitnote/debitnote.component';
import { CreditnoteComponent } from './creditnote/creditnote.component';

const routes: Routes = [
  {path:"",component:LandingComponent,children:[
    {path:"debitnote",component:DebitnoteComponent},
    {path:"creditnote",component:CreditnoteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
