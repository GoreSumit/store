import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from '../../models/products';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  
  product$!:Observable<Products>;

  constructor(private route:ActivatedRoute, private ProductService:ProductService){
    
    const id= Number(this.route.snapshot.paramMap.get('id'));
    

    this.product$ = this.ProductService.getProductById(id);

  }

}
