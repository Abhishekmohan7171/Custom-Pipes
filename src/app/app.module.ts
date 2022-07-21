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


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    AboutComponent,
    UsersComponent,
    ChildComponent,
    ResponsiveDesignComponent,
    UsdInrPipe,
    MaskEmailPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyAzH_DcpdM-pgmw89eEeMPyRGdbGCJqDY0",
        authDomain: "authfire-trial.firebaseapp.com",
        projectId: "authfire-trial",
        storageBucket: "authfire-trial.appspot.com",
        messagingSenderId: "271726767383",
        appId: "1:271726767383:web:7d1363fef6bbafc8dbdb52"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
