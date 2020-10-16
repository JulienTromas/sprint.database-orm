import { Repository, getRepository, DeleteResult } from "typeorm";
import Account from "../../entities/AccountModel";
import { IManager } from "../common/manager";

interface AccountWithBalance extends Account {
  balance: number;
}

class AccountManager implements IManager {
  protected accountRepository: Repository<Account>;

  constructor() {
    this.accountRepository = getRepository(Account);
  }

  /**
   * FIXME
   * Get an account
   *
   * Requirements:
   * - Derive balance (both debit and credit)
   */

  public async getAccount(accountId: string): Promise<AccountWithBalance> {
    // You are free to remove any lines below
    const blankAccount = <AccountWithBalance>new Account();
    const accountBalanceDerived = 0.0;
    blankAccount.balance = accountBalanceDerived;

    // FIXME Your should derive account balance by aggregating all the transactions
    if (await this.accountRepository.findOne({ id: accountId })) {
      const target = this.accountRepository.findOne({ id: accountId });
      blankAccount.id = (await target).id;
      blankAccount.name = (await target).name;
      return Promise.resolve(blankAccount);
    } else {
      return Promise.reject();
    }
  }

  /**
   * FIXME
   * create a new account
   */
  public async createAccount(details: Partial<Account>): Promise<Account> {
    const newAccount = new Account();
    newAccount.name = details.name;
    newAccount.owner = details.owner;
    await this.accountRepository.save(newAccount);
    return Promise.resolve(newAccount);
  }

  /**
   * FIXME
   * update account details
   */
  public async updateAccount(accountId: string, changes: Partial<Account>): Promise<Account> {
    const target = await this.accountRepository.findOne({ id: accountId });
    for (const key in changes) {
      target[key] = changes[key];
    }
    return this.accountRepository.save(target);
    //return Promise.resolve(new Account());
  }

  /**
   * FIXME
   * delete account
   *
   * Requirements:
   * - Cascade and delete all transactions
   */
  public async deleteAccount(accountId: string): Promise<DeleteResult | void> {
    await this.accountRepository.delete({ id: accountId });
    return Promise.resolve();
  }
}

export default AccountManager;
