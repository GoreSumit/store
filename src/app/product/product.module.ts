import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from './review/review.component';
import { SpecificationComponent } from './specification/specification.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    
    SpecificationComponent,
    ReviewComponent,
    ProductDetailComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    
    
  ]
})
export class ProductModule { }
