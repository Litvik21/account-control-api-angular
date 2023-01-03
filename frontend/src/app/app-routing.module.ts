import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRegComponent } from "./account-reg/account-reg.component";
import { AccountLogComponent } from "./account-log/account-log.component";
import { AccountInfoComponent } from "./account-info/account-info.component";
import { AccountUpdateComponent } from "./account-update/account-update.component";

const routes: Routes = [
  {path: 'account-reg', component: AccountRegComponent},
  {path: 'account-log', component: AccountLogComponent},
  {path: 'account-info', component: AccountInfoComponent},
  {path: 'account-update', component: AccountUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
