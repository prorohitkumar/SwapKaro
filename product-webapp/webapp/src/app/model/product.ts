import { Address} from "./address";
import { ModeOfPayment } from "./mode-of-payment.enum";
export class Product {
productName:String;
productCategory:String;
categoryDescription:String;
yearOfPurchase:number;
productDescription:String;
quantity:number;
address:Address;
modeOfPayment:ModeOfPayment;
noOfBarterCoin:number;
productImage:any;
exchangeItems:String[];
dateOfPosting:String;
productOwner: String;
productQR: any;
}
