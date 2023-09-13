import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges,OnInit {

  @Input()
  rating = 4 ;

  @Output()
  ratingClick = new EventEmitter<number>()

 

  starWidth = 0;
  constructor(){
    // this.starWidth=20 * this.rating;
    //constructor is called before onChanges
  }

  ngOnChanges(): void {
    console.log('onChanges',this.rating)
    //is called on every change
    this.starWidth=20 * this.rating;
  }
  ngOnInit(): void {
    console.log('onInit', this.rating);
    // is called at mounting of component
    
  }

  onClick(){
    this.ratingClick.emit(this.rating)

  }

}
