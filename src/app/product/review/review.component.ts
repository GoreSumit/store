import { Component } from '@angular/core';
import { Review } from '../../models/reviews';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  review = new Review();

  onSubmit():void{
    console.log(this.review);    
    this.review = new Review();
  }
}
