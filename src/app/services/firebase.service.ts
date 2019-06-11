import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseService {

   listings: Observable<any[]>;

   constructor(private af: AngularFirestore) { }

   getListings() {
      this.listings = this.af.collection('listings').valueChanges();
      return this.listings;
   }
}

// interface Listing {
//    $key?: string;
//    title?: string;
//    type?: string;
//    image?: string;
//    city?: string;
//    owner?: string;
//    bedrooms?: string;
// }
