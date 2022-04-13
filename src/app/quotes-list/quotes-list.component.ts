import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  title = 'Quotes List'
  
  constructor() { }

  ngOnInit(): void {
  }

  quotes: Quotes[] = [
    {id: 1, author: 'Edward kevin', quote: 'This is quote number one', dateAdded: new Date(2022,4,7), user: 'Ian', upvote: 0, downvote: 0},
    {id: 2, author: 'john kevin', quote: 'This is quote number two', dateAdded: new Date(2022,4,7), user: 'leon', upvote: 0, downvote: 0},
    {id: 3, author: 'Doe kevin', quote: 'This is quote number three', dateAdded: new Date(2022,4,7), user: 'dan', upvote: 0, downvote: 0},
    {id: 4, author: 'Gerald kevin', quote: 'This is quote number four', dateAdded: new Date(2022,4,7), user: 'fello', upvote: 0, downvote: 0},
  ];

  deleteBtn(isDeleted: boolean, index: number){
    if(isDeleted){
      let del = confirm(`Confirm deletion of quote ${this.quotes[index].id}?`)
      if(del){
        this.quotes.splice(index,1)
      }
    }
  }

  first!:number
  last!:number
  count!:number

  highest(){
    this.first =0
    this.last =0

    for(this.count=0; this.count < this.quotes.length; this.count++){
      this.last = this.quotes[this.count].upvote;
      if(this.last > this.first){ this.first=this.last}
    }
    return this.first;
  }

  addNewQuote(quote:Quotes){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }


}
