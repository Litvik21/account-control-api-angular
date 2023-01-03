import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from "../model/account";
import { AccountService } from "../service/account.service";

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  account!: Account;

  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService,
    private location: Location) { }

  ngOnInit(): void {
    this.findAccount();
  }

  findAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.accountService.getAccount(id)
      .subscribe(account => this.account = account);
  }

  goBack(): void {
    this.location.back();
  }

  changeStatus(): void {
    this.accountService.changeAccountStatus(this.account.id!);
  }
}
