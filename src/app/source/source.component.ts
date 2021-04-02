import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  inputData: any;
  data : any;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(postData) {
    console.log(postData);
    this.data = postData.inputData; 
  }

  onLiked(liked:boolean) {
    liked ? this.message = "Liked your Message!" : this.message = "Disliked your Message."
  }

}
