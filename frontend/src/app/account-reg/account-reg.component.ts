import { Component, OnInit } from '@angular/core';
import {Account} from "../model/account";
import {AccountService} from "../service/account.service";

@Component({
  selector: 'app-account-reg',
  templateUrl: './account-reg.component.html',
  styleUrls: ['./account-reg.component.scss']
})
export class AccountRegComponent implements OnInit {
  accounts: Account[] = [];
  username = "";
  password = "";
  repeatPassword = "";
  firstName = "";
  lastName = "";


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts()
      .subscribe(accounts => this.accounts = accounts);
  }

  reg() {
    let id = Math.max.apply(Math, this.accounts.map(function (a) {return a.id!;}));

    this.accountService.regAccount({id: id + 1, username: this.username, password: this.password,
    repeatPassword: this.repeatPassword, firstName: this.firstName, lastName: this.lastName} as Account)
      .subscribe(account => {this.accounts.push(account)});

    this.username = "";
    this.password = "";
    this.repeatPassword = "";
    this.firstName = "";
    this.lastName = "";
  }
}
