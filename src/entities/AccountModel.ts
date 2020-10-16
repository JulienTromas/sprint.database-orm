import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Transaction from "./TransactionModel";
import User from "./UserModel";

/**
 * FIXME
 */

@Entity({ name: "account" })
class Account {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  // @OneToMany(() => Transaction, (transaction) => transaction.account)
  // public transactions: Transaction[];

  @Column()
  public name: string;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  public owner: User;
}

export default Account;
