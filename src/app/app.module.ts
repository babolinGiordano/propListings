import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'listings', component: ListingsComponent },
   { path: 'add-listing', component: AddListingComponent }
];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ListingsComponent,
      NavbarComponent,
      ListingComponent,
      AddListingComponent,
      EditListingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
