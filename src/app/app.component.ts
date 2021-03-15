import { Component } from '@angular/core';
import { PassedValue } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  values={
    likeCount:0,
    isFavourite:false
  }
  onChange(value:PassedValue){
    console.log("change Value",value.likeCount," ",value.isFavourite);
  }
}
