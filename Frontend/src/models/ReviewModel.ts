class ReviewModel{
    id:number;
    userEmail:string;
    date:string;
    rating:number;
    book_id:number;
    reviewDescription?:string;

    constructor(id:number, userEmail:string, date:string, rating:number, book_id:number, review_description:string) {
        this.id = id;
        this.userEmail = userEmail;
        this.date = date;
        this.rating = rating;
        this.book_id = book_id;
        this.reviewDescription = review_description;
    }
}

export default ReviewModel;