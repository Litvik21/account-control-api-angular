import {Component, OnInit} from '@angular/core';
import {Account} from "../model/account";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "../service/account.service";
import {Location} from "@angular/common"

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.scss']
})
export class AccountUpdateComponent implements OnInit {

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

  save(): void {
    this.accountService.updateAccount(this.account)
      .subscribe(() => this.goBack());
  }
}
