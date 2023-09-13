import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, filter, interval, map, Observable, of, shareReplay, Subject, Subscription, throwError } from 'rxjs';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //nums$ = of(1,2,3,"Hello Rxjs",{id:2},[1,2,3])

  // numbers$ = of(21,32,65,8,9,75,51,50,64)
  // interval$ = interval(1000)
  // subscription$!:Subscription;

  // myObservable$ = new Observable(i=>{
  //   i.next(10);
  //   i.next(20);
  //   i.next(30);
  //   i.complete();
  //   i.next(40);
  // })

  // unicast$ = new Observable( observe=>{
  //   observe.next(Math.random())
  // })

  // multicast$ = new Observable(observe=>{
  //   observe.next(Math.random())
  // }).pipe(shareReplay());

  //subject$ = new Subject();
  


  constructor(private http:HttpClient) {
    // this.unicast$.subscribe(value=>console.log('A=>',value))
    // this.unicast$.subscribe(value=>console.log('B=>',value))

    // this.multicast$.subscribe(value=>console.log('C=>',value))
    // this.multicast$.subscribe(value=>console.log('D=>',value))



    // this.subject$.next(10); // these values wont be included in subject$ as the next is called after subscription inside it
    // this.subject$.next(20);
    // this.subject$.subscribe({
    //   next: value =>{console.log('subject A=>',value)},
    //   error: err=>{console.log(err)},
    //   complete:()=>{console.log('Done')}
    //})
    //this.subject$.next(30); //these will be displayed in subscritption
    //this.subject$.next(40);


    // this.subject$.subscribe(value=>console.log('subject B=>',value))
    // this.subject$.next(50);
    // this.subject$.next(60);
    // this.subject$.next(70);
    // this.subject$.next(Math.random());
    // this.subject$.complete();
    // this.subject$.next(11111111);



    // this.nums$.subscribe(i=>{
    //   console.log(i);
    // })
    // this.myObservable$.subscribe(i=>{
    //   console.log(i);
    // })

  // this.myObservable$.subscribe({
  //   next:value => console.log(value),
  //   error: err=>{console.log(err)},
  //   complete:()=>{console.log('Done')}
  // })

  // this.numbers$.pipe(filter(a=>a%2===0),map(value=>value+value)).subscribe(i=>console.log(i))

  // this.interval$.subscribe(i=>console.log('A=>',i))
  
  // this.subscription$ = this.interval$.subscribe(i=>console.log('B=>',i))
  
  // setTimeout(()=>{
  //   this.subscription$.unsubscribe() 
  // },5000) //unsubscribe after 5 seconds
  
   
}

  private cartCount =0;

  cartCount$ = new Subject<number>();


  cartIncrement(){
    this.cartCount++;
    this.cartCount$.next(this.cartCount);
  }
  cartDecrement(){
    this.cartCount--;
    this.cartCount$.next(this.cartCount);

  }

  getCartCount():number{
    return this.cartCount;

  }

  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>("http://localhost:3000/products").pipe(delay(2000),catchError(this.handleError));
  }

  getProductById(id:number):Observable<Products>{
    return this.http.get<Products>(`http://localhost:3000/products/${id}`).pipe(catchError(this.handleError));

  }

  handleError(error:HttpErrorResponse){
    let errorMessage ='';
    if(error.status===0){
      //client error
      errorMessage = ` Some error occured: ${error}`;
    }
    else{
      //server side error
      errorMessage = `Error Status: ${error.status} Message:${error.message}`
    }

    return throwError(()=>errorMessage)

  }
}
