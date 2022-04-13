export class Quotes {
    id?: number;
    author?: string;
    quote?: string;
    dateAdded?: Date;
    user?: string;
    upvote: number = 0;
    downvote: number = 0;

    constructor(id: number, author: string, quote: string, dateAdded: Date, user: string, upvote: number, downvote: number){
        this.id = id;
        this.author = author;
        this.quote = quote;
        this.dateAdded = dateAdded;
        this.user = user;
        this.upvote = upvote;
        this.downvote = downvote;
    }

}
