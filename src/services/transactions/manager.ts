import { Repository, getRepository, DeleteResult, MoreThanOrEqual } from "typeorm";
import Transaction from "../../entities/TransactionModel";
import { IManager } from "../common/manager";
import Account from "../../entities/AccountModel";

interface TransactionWithAccountId extends Transaction {
  accountId: string;
}

/**
 * Entity manager for User model
 * This is where you define logic to access data from database
 *
 * To read more about using a Manager object,
 * refer to UserManager class in `src/service/users/manager.ts`
 */
class TransactionManager implements IManager {
  protected transactionRepository: Repository<Transaction>;
  protected accountRepository: Repository<Account>;


  constructor() {
    this.transactionRepository = getRepository(Transaction);
    this.accountRepository = getRepository(Account);
  }

  /**
   * FIXME
   * Get a transaction from database
   */
  public async getTransaction(transactionId: string): Promise<Transaction> {
    //Promise.resolve(new Transaction());
    const output = await this.transactionRepository.findOne(transactionId);
    return output;

  }

  /**
   * FIXME
   * Get a list of transactions with ids from database
   */
  public async listTransactionsByIds(transactionIds: string[]): Promise<Transaction[]> {
    return Promise.resolve([]);
  }

  /**
   * FIXME
   * Get a list of transactions of a particular account
   */
  public async listTransactionsInAccount(accountId: string): Promise<Transaction[]> {
    return Promise.resolve([]);
  }

  /**
   * FIXME
   * Get a list of transactions less than `maximumAmount` in a particular `account`
   */
  public async filterTransactionsByAmountInAccount(accountId: string, maximumAmount: number): Promise<Transaction[]> {
    return Promise.resolve([]);
  }

  /**
   * FIXME
   * create a new transaction
   */
  public async createTransaction(details: Partial<TransactionWithAccountId>): Promise<Transaction> {
    const newTransaction = await new Transaction();
    newTransaction.amount = details.amount;
    newTransaction.transactionDate = details.transactionDate;
    newTransaction.description = details.description;
    newTransaction.account = await this.accountRepository.findOne(details.accountId);

    await this.transactionRepository.save(newTransaction);
    return Promise.resolve(newTransaction);
    // return Promise.resolve(new Transaction());
  }

  /**
   * update a transaction
   *
   * FIXME
   * 1. Remove the return statement
   * 2. Uncomment the remaining lines
   */
  public async updateTransaction(
    transactionId: string,
    changes: Partial<TransactionWithAccountId>,
  ): Promise<Transaction> {
    const target = await this.transactionRepository.findOne({ id: transactionId });
    for (const key in changes) {
      target[key] = changes[key];
    }
    return this.transactionRepository.save(target);
  }

  /**
   * FIXME
   * delete a transaction
   */
  public async deleteTransaction(transactionId): Promise<DeleteResult | void> {
    await this.transactionRepository.delete({ id: transactionId });
    return Promise.resolve();
  }
}

export default TransactionManager;
