import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinTable,
  JoinColumn,
} from "typeorm";
import Account from "./AccountModel";

/**
 * FIXME
 */

@Entity({ name: "transactions"})
class Transaction {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public amount: number;

  @Column()
  public transactionDate: Date;

  @Column()
  public description: string;

  @ManyToOne(() => Account, (account) => account.id, {
    onDelete: "CASCADE",
  })
  public account: Account;
}

export default Transaction;
