import { Component, OnInit } from '@angular/core';
import {AccountService} from "../service/account.service";
import {Account} from "../model/account";

@Component({
  selector: 'app-account-log',
  templateUrl: './account-log.component.html',
  styleUrls: ['./account-log.component.scss']
})
export class AccountLogComponent implements OnInit {
  username = "";
  password = "";

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  log(): void {
    this.accountService.logAccount({username: this.username, password: this.password} as Account);

    this.username = "";
    this.password = "";
  }
}
