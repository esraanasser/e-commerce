import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './mainslider/mainslider.component';
import { ProductComponent } from './product/product.component';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpInterceptorInterceptor } from './http-interceptor.interceptor';
import { LoaderComponent } from './loader/loader.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { GetSubCategoriesComponent } from './get-sub-categories/get-sub-categories.component';
import { ToastrModule, ToastrService,provideToastr } from 'ngx-toastr';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { CategorysliderComponent } from './categoryslider/categoryslider.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AboutComponent,
    BrandsComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    ProductDetailsComponent,
    MainsliderComponent,
    ProductComponent,
    SearchPipe,
    CheckoutComponent,
    OrdersComponent,
    LoaderComponent,
    SubcategoryComponent,
    GetSubCategoriesComponent,
    WishlistComponent,
    ForgetpasswordComponent,
    CategorysliderComponent,
    
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  CarouselModule,
  RouterModule,
  FormsModule,
  ToastrModule.forRoot(),
  
  
  
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS,
   useClass:HttpInterceptorInterceptor,
  multi:true
 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
