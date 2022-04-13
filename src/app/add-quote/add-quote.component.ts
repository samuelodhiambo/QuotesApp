import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
  newQuote = new Quotes(0, '', '', new Date(), '', 0, 0)

  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(myform: NgForm){
    this.addQuote.emit(this.newQuote);
    // myform.reset();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
