import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"newsapp-47394","appId":"1:817937810570:web:14a27c4723cc6e4f4b5973","storageBucket":"newsapp-47394.firebasestorage.app","apiKey":"AIzaSyAG09VdAuUlGNpVVdbzQCQxRoN5faLgwAk","authDomain":"newsapp-47394.firebaseapp.com","messagingSenderId":"817937810570","measurementId":"G-DLJX5B02YX"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
