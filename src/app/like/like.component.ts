import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input("likeCount") likeCount:any;
  @Input("isFavourite") isFavourite:any;
  @Output("change") change=new EventEmitter();
  constructor() { 
  
  }
  onClicked(){
    this.isFavourite=!this.isFavourite;
    this.likeCount+=this.likeCount===0?+1:-1;
    this.change.emit({isFavourite:this.isFavourite,likeCount:this.likeCount})
  }  

  ngOnInit(): void {
  }

}

export interface PassedValue{
  isFavourite:boolean,
  likeCount:boolean
}
