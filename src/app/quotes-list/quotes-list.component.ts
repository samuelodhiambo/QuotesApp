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
    {id: 1, author: 'Elbert Hubbard', quote: 'Positive anything is better than negative nothing.', dateAdded: new Date(2022,4,7), user: 'Samwel Odhiambo', upvote: 0, downvote: 0},
    {id: 2, author: 'Zig Ziglar', quote: 'One small positive thought can change your whole day.', dateAdded: new Date(2022,4,7), user: 'Leon James', upvote: 0, downvote: 0},
    {id: 3, author: 'Joyce Meyer', quote: 'You cannot have a positive life and a negative mind.', dateAdded: new Date(2022,4,7), user: 'Dan', upvote: 0, downvote: 0},
    {id: 4, author: 'Widad Akrawi', quote: "If you are positive, you’ll see opportunities instead of obstacles.", dateAdded: new Date(2022,4,7), user: 'Felix Lloyd', upvote: 0, downvote: 0},
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
