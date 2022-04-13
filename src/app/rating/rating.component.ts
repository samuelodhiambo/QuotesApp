import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() quote!: Quotes;


  upVote(){
      this.quote.upvote++;
  }

  downVote(){
      this.quote.downvote++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
