import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.scss']
  
})
export class AppComponent {
  hideComp = false;

  hideComponent(){
    this.hideComp = !this.hideComp;
  }
}
