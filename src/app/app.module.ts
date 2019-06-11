import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { FirebaseService } from './services/firebase.service';

//Config object to commect to firebase
export const firebaseConfig = {
   apiKey: 'AIzaSyCojsdBzWmHmzLpo61gHdJEN3G9eb6ugqg',
   authDomain: 'proplisting-b85b9.firebaseapp.com',
   databaseURL: 'https://proplisting-b85b9.firebaseio.com',
   projectId: 'proplisting-b85b9',
   storageBucket: 'proplisting-b85b9.appspot.com',
   messagingSenderId: '910863741795',
   appId: '1:910863741795:web:dd770e8d59404a8d'
};

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
      RouterModule.forRoot(appRoutes),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule,
      AngularFireStorageModule,
      AngularFireAuthModule
   ],
   providers: [
      FirebaseService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
