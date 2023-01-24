import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component, OnInit } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatDialog } from "@angular/material/dialog";
import { Email } from "../model/email";
import { EmailServiceService } from "../service/email-service.service";

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.css"],
})
export class EmailComponent implements OnInit {
  email: Email = {
    receiversEmail: [],
    subject: "Notification Alert form SwapKaro",
    messageBody: "Check out our new Product!",
    attachment: "http://localhost:4200/header/productdetails",
  };

  // receiver's email addresses
  listOfEmails: string[] = [];

  constructor(private emailService: EmailServiceService,private dialog:MatDialog) {}

  ngOnInit(): void {}

  onSubmit() {
    // ---------------------------------
    // console.log(this.listOfEmails);
    // ---------------------------------
    this.email.receiversEmail = this.listOfEmails;
    // ---------------------------------
    console.log(this.email.receiversEmail);
    // ---------------------------------
    this.emailService.sendEmail(this.email).subscribe((res) => {
      this.email = res;
      alert("email sent successfully!");
      
      this.listOfEmails = [];
      this.dialog.closeAll();
    });
  }

  // ------------------------------------------------------------------------------------------------------------
  // matchip logic below
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    // Add email to the list
    if (value) {
      this.listOfEmails.push(value);
    }

    // Clear the input value
    if (event.input) {
      event.input.value = "";
    }
  }

  remove(email: string): void {
    const index = this.listOfEmails.indexOf(email);

    if (index >= 0) {
      this.listOfEmails.splice(index, 1);
    }
  }
  // ------------------------------------------------------------------------------------------------------------
}
