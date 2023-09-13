import { Component, ɵcoerceToBoolean, OnDestroy } from '@angular/core';
import { catchError, map, Subject, Subscription, takeUntil, throwError } from 'rxjs';
import { Products } from '../models/products';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls:['./product.component.scss']
 
})
export class ProductComponent /*implements OnDestroy*/ {
  

/***********************Pagination******************************* */
pStart:number=1;
productPerPage:number=4;

firstPage(){
  if(this.pStart > this.totalPages()){
      return this.pStart=1;
  }
  else{
    return (this.pStart*this.productPerPage)-(this.productPerPage);
  }
}

pageEnd(){
  return this.productPerPage*this.pStart
}

onNext(){
  console.log(this.firstPage())
  return this.pStart+=1;
 }

onPrevious(){
  return this.pStart-=1
 }

 totalPages(){
  return Math.ceil(this.filPro.length/this.productPerPage);
 }
/**************************************************************** */


/******************Category Buttons****************************** */

  byCategory(event:any){
    this.pStart = 1;
    this.filPro = this.products.filter(product=>{
      if(event.target.innerText === "All"){
        return product;
      }
      else
      {
        console.log(this.firstPage())
        return product.category.includes(event.target.innerText)
      }
    })
  }
  /**************************************************************** */


  /*****************************API call and Subscription************************** */
 loading =true;
 errorMessage= null;

 products$ = this.productService.getProducts().pipe(map(i =>{
  this.loading=false;
  this.products=i;
  this.filPro=i;
  return i;
 }),
 catchError(error=>{
  this.loading=false;
  this.errorMessage=error;
  return throwError(()=>'')
 })
 
 )

  /******************************************************************************** */



//  subscription$!:Subscription;
//  subject$ = new Subject();


  constructor(private productService:ProductService){

    /*
    // to unsubscribe with single call
    this.loading=true;
    this.subscription$=this.productService.getProducts().pipe(takeUntil(this.subject$)).subscribe({
      next:products=>{
      this.loading=false;
      this.products = products
      this.filPro = products
      },
      error:err=>{
      this.loading=false;
      this.errorMessage = err;
      },
  })
  */


}
  
  addToCart(product:any, event:any): void{
    this.productService.cartIncrement();
  }
  
  /******** getter and setter for 2-way data binding or filtering ************/

  private _filterBy: string='';

  get filterBy():string{
    return this._filterBy;
  }

  set filterBy(fb:string){
    this._filterBy = fb
    this.filterProduct(fb)
  }

 filterProduct(value:string):void{
  this.filPro = this.products.filter(product=>{
    return product.name.toLowerCase().includes(value.toLowerCase())
  })
 }
 /************************************************************************** */

/*********************** Hide Images CheckBox ********************************/
 checkBox = true;
  isChecked(event:any){
    this.checkBox = event.target.checked==true? false : true;
    console.log(typeof(this.checkBox))
  }
  /************************************************************************** */
  onRatingClick(event:number){
    console.log(event);
    
  }
 


/****************** Static Product List Array******************************** */
  // products:Products[]=[
  //   {
  //     id:1,
  //     name:'Samsung',
  //     price:42000.23,
  //     model:'S21',
  //     image:"assets/samsung.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Mobile",
  //     code:"M-001",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam", 
  //     rating:2.5,
  //   },
  //   {
  //     id:2,
  //     name:'OnePlus',
  //     price:42000,
  //     model:'LE211',
  //     image:"assets/oneplus.png",
  //     featured:true,
  //     cardColor:"",
  //     category:"Mobile",
  //     code:"M-002",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam ", 
  //     rating:4.5,

  //   },
  //   {
  //     id:3,
  //     name:"Apple",
  //     price:80000,
  //     model:'iPhone 13',
  //     image:"assets/iphone.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Mobile",
  //     code:"M-003",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam",
  //     rating:3.5,

    
  //   },
  //   {
  //     id:4,
  //     name:"Watch",
  //     price:12000,
  //     model:'Boat inspire',
  //     image:"assets/watch.jpg",
  //     featured:false,
  //     cardColor:"",
  //     category:"Watch",
  //     code:"W-001",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam",
  //     rating:4,

    
  //   },
  //   {
  //     id:5,
  //     name:"Redmi 9A",
  //     price:7499,
  //     model:'Redmi 9A',
  //     image:"assets/redmi9a.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Mobile",

  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cum reiciendis quo!",
  //     rating:5,

    
  //   },
  //   {
  //     id:6,
  //     name:"Lenovo Ideapad Gaming 3",
  //     price:53312,
  //     model:'15IHU6',
  //     image:"assets/lenovoideapadgaming3.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Laptop",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam repel",
  //     rating:5,

  //   },
  //   {
  //     id:7,
  //     name:"OnePlus Y series",
  //     price:14999,
  //     model:'2020 model',
  //     image:"assets/oneplusyseries.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"TV",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam r", 
  //     rating:5,

  //   },
  //   {
  //     id:8,
  //     name:"Croma 10kg Washing machine",
  //     price:16690,
  //     model:'CRLW100SMF231001',
  //     image:"assets/croma10kg.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Washing Machine",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam",
  //     rating:5,

  //   },
  //     {
  //     id:9,
  //     name:"Croma 170litres Fridge",
  //     price:10090,
  //     model:'CRLRFC403sD170',
  //     image:"assets/croma170.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Fridge",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam repel",
  //     rating:5,

  //   },
  //   {
  //     id:10,
  //     name:"Carrier Ester CXI",
  //     price:32990,
  //     model:'CAI18ES3R30F1',
  //     image:"assets/carrierester.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"AC",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam r",  
  //     rating:5,

  //   },
  //   {
  //     id:11,
  //     name:"Vivo V23",
  //     price:25999,
  //     model:'V23 5G',
  //     image:"assets/vivov23.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"Mobile",

  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cum reiciendis quo!",
  //     rating:5,

    
  //   },
  //   {
  //     id:12,
  //     name:"MI 5X 108cm",
  //     price:31999,
  //     model:'L43M6-ES',
  //     image:"assets/mi5x108.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"TV",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam r",  
  //     rating:5,

  //   },
  //   {
  //     id:13,
  //     name:"TOSHIBA C350LP",
  //     price:27990,
  //     model:'C350LP',
  //     image:"assets/toshibatv.avif",
  //     featured:false,
  //     cardColor:"",
  //     category:"TV",
  //     desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maxime, ipsa cupiditate quisquam r",
  //     rating:5,

  //   },
  // ]

  products:Products[]=[]
/**************************************************************************** */

/*************** Dynamic Product List Array  **********************************/

  filPro:Products[]=this.products;


/******************************************************************************/

  
// ngOnDestroy(){
//   // if(this.subscription$){
//   //   this.subscription$.unsubscribe;
//   // }

//   this.subject$.next(null);
//   this.subject$.unsubscribe;
// }
  

  
}
