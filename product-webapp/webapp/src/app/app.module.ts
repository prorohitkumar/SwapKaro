import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RegisterComponent } from "./register/register.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProductRecommendationComponent } from "./product-recommendation/product-recommendation.component";
import { PostProductComponent } from "./post-product/post-product.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { ChatRoomComponent } from "./chat-room/chat-room.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { InvoiceComponent } from "./order-history/invoice/invoice.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { NgxPaginationModule } from "ngx-pagination";
import { AvatarModule } from "ngx-avatar";
import { BarterCoinsComponent } from "./payment/barter-coins/barter-coins.component";
import { BarterTradingComponent } from "./payment/barter-trading/barter-trading.component";
import { CardComponent } from "./card/card.component";
import { HeaderComponent } from "./header/header.component";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { HomePageComponent } from "./home-page/home-page.component";
import { ProductSuggestionComponent } from "./product-suggestion/product-suggestion.component";
import { EmailComponent } from "./email/email.component";
import { CongratulationComponent } from "./congratulation/congratulation.component";
import { FilterPipe } from "./product-recommendation/filter.pipe";
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavBarComponent,
    LoginComponent,
    ProductRecommendationComponent,
    PostProductComponent,
    ProductDetailsComponent,
    ProductRecommendationComponent,
    ChatRoomComponent,
    InvoiceComponent,
    OrderHistoryComponent,
    BarterCoinsComponent,
    BarterTradingComponent,
    HeaderComponent,
    HomePageComponent,
    CardComponent,
    FilterPipe,
    EmailComponent,
    CongratulationComponent,

    ProductSuggestionComponent,
    
    WithdrawComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    HttpClientModule,
    MatPaginatorModule,
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    NgxPaginationModule,
    AvatarModule,
    NgxPaginationModule,
    MatListModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
