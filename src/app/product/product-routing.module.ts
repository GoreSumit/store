import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { ReviewComponent } from './review/review.component';
import { SpecificationComponent } from './specification/specification.component';

const routes: Routes=[
  
  { path:'', component:ProductComponent,title:'Store-Products'  },
  { path:':id', component:ProductDetailComponent,title:'Store-Home',
  /*canActivate:[ProductIdValidationGuard],*/ 
  children:[
  {
    path:'specification',
    component:SpecificationComponent
  },
  {
    path:'review',
    component:ReviewComponent
  }
]},
  
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    
  ]
})
export class ProductRoutingModule { }
