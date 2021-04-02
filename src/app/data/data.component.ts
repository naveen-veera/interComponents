import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('indata') inputData: any;
  @Output() liked = new EventEmitter<boolean>();
  didLike = false;

  like(liked: boolean) {
    this.liked.emit(liked);
    this.didLike = true;
  }

}
