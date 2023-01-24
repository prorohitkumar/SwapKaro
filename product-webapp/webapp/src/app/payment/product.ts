
export interface Product {
    productId: Number;
    productName: string;
    yearOfPurchase: Number;
    dateOfPosting: string;
    productCategory: string;
    categoryDescription: string;
    location: string;
    productDescription: string;
    quantity: Number;
    productImage: string;
    productStatus: string;
    modeOfPayment: string[];
    noOfBarterCoin: Number;
    exchangeItems: string[];
    productOwner: string;
    ratings: Number;
    reviews: {
      reviewerEmailId: string;
      comment: string;
      dateOfReview: string;
      reply: {
        replyerEmailId: string;
        comment: string;
        dateOfReply: string;
      }[];
    }[];
  }
  