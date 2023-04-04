import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title = 'My Store';

  currentTheme= 'primary';

  themeObj={
    'bg-dark':false,
    'bg-primary':true,
  }
  

  btnTheme={
    'btn-dark':true,
    'btn-primary':false,
  }

  



  changeTheme():void{
    
    this.currentTheme = this.currentTheme=== 'primary'? 'dark' : 'primary';

    this.themeObj={
      'bg-dark': this.currentTheme === 'dark',
      'bg-primary':this.currentTheme === 'primary',
      
    }
    this.btnTheme={
      'btn-dark':this.currentTheme === 'primary',
      'btn-primary':this.currentTheme === 'dark',
    }
  }



  cartAdd=0;
  constructor(private productService:ProductService){
    this.productService.cartCount$.subscribe(i=>this.cartAdd=i);
  }

  // getCount(){
  //   this.cartAdd = this.productService.getCartCount();
  // }



}
