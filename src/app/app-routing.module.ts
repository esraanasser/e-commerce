import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
// import { GetSubCategoriesComponent } from './get-sub-categories/get-sub-categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { GetSubCategoriesComponent } from './get-sub-categories/get-sub-categories.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'about',canActivate:[authGuard],component:AboutComponent},
  {path:'product',canActivate:[authGuard],component:ProductComponent},
  {path:'categories',canActivate:[authGuard],component:CategoriesComponent},
  {path:'wishlist',canActivate:[authGuard],component:WishlistComponent},
  {path:'subcategories/:id',canActivate:[authGuard],component:SubcategoryComponent},
  {path:'GetSubCategoriesComponent/:id',canActivate:[authGuard],component:GetSubCategoriesComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'productDetails/:id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'checkout/:cartId',component:CheckoutComponent},
  {path:'allorders',component:OrdersComponent},
  {path:'register',component:SignupComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  { path: 'cart', loadChildren: () => import('./cartt/cartt.module').then(m => m.CarttModule) },
  {path:'**',component:NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
