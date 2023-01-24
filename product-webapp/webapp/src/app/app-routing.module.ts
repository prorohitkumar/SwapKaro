import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { LoginComponent } from "./login/login.component";
import { ProductRecommendationComponent } from "./product-recommendation/product-recommendation.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { PostProductComponent } from "./post-product/post-product.component";
import { OrderHistoryComponent } from "./order-history/order-history.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { ProductSuggestionComponent } from "./product-suggestion/product-suggestion.component";
import { EmailComponent } from "./email/email.component";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "email",
    component: EmailComponent,
  },
  {
    path: "header",
    component: HeaderComponent,
    children: [
      {
        path: "products",
        component: ProductRecommendationComponent,
      },
      {
        path: "suggestions",
        component: ProductSuggestionComponent,
      },
      {
        path: "productdetails",
        component: ProductDetailsComponent,
      },
      {
        path: "postproduct",
        component: PostProductComponent,
      },
      {
        path: "orderhistory",
        component: OrderHistoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
//   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
