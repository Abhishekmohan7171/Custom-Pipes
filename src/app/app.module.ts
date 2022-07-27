import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseServiceService } from './firebase-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { ChildComponent } from './child/child.component';
import { ResponsiveDesignComponent } from './responsive-design/responsive-design.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { MaskEmailPipe } from './pipes/mask-email.pipe';
import { FirstLetterPipe } from './pipes/first-letter.pipe';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyB-43VoetHgLSCwH6qSbmlHhVC0Bn2bv1M",
  authDomain: "washapp-e00c7.firebaseapp.com",
  databaseURL: "https://washapp-e00c7-default-rtdb.firebaseio.com",
  projectId: "washapp-e00c7",
  storageBucket: "washapp-e00c7.appspot.com",
  messagingSenderId: "167019598224",
  appId: "1:167019598224:web:9dedce4a64c5d060fa6315"
};

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    AboutComponent,
    UsersComponent,
    ChildComponent,
    ResponsiveDesignComponent,
    UsdInrPipe,
    MaskEmailPipe,
    FirstLetterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
