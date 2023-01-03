import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccountRegComponent} from './account-reg/account-reg.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountLogComponent} from './account-log/account-log.component';
import {AccountInfoComponent} from './account-info/account-info.component';
import {AccountUpdateComponent} from './account-update/account-update.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AccountRegComponent,
    AccountLogComponent,
    AccountInfoComponent,
    AccountUpdateComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
