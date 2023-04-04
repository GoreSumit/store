import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './highlight.directive';




@NgModule({
  declarations: [
    ConvertToSpacePipe,
    StarComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[
    ConvertToSpacePipe,
    StarComponent,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HighlightDirective
  ]
})
export class SharedModule { }
