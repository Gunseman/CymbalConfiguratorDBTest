import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/productList.component';
import { Product } from './products/product';
import { ProductToolboxComponent } from './products/productToolbox.component';
import { ProductSizeFilterPipe } from './products/productSizePipe';
import { RatingComponent } from './shared/rating.component';
import { ProductService } from './service/product.serviceMySQL';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './access/login.component';
import { AccountComponent } from './access/account.component';
import { PageNotFoundComponent } from './shared/pageNotFound.component';
import { NewAccountComponent } from './access/newAccount.component';
import { StageComponent } from "./stage/stage.component";
import { MyAccountComponent } from "./access/myAccount.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    Product,
    ProductToolboxComponent,
    ProductSizeFilterPipe,
    RatingComponent,
    StageComponent,
    GalleryComponent,
    WelcomeComponent,
    LoginComponent,
    AccountComponent,
    PageNotFoundComponent,
    NewAccountComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'configurator', component: ProductListComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'login', component: LoginComponent },
      { path: 'newAccount', component: NewAccountComponent },
      { path: 'myaccount/:id', component: MyAccountComponent },
      { path: 'myaccount', redirectTo: 'welcome' },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch:'full' }
    ], { useHash: false })
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
