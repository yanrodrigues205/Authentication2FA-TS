import { Entity, Column,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity("two_factors")

class TwoFactors
{
    @PrimaryGeneratedColumn("uuid")
    public id? : string

    @Column("varchar", { length: 200, nullable: false })
    public email? : string

    @Column("varchar", { length: 6, nullable: false})
    public code? : string

    @Column("boolean", { nullable: false, default: false })
    public checked? : boolean

    @Column({ type: "timestamp", nullable: true })
    public validity? : Date

    @CreateDateColumn({ type: "timestamp"})
    public created_at? : Date

    @UpdateDateColumn({ type: "timestamp"})
    public updated_at? : Date

    @DeleteDateColumn({ type: "timestamp"})
    public deleted_at? : Date
}


export default TwoFactors;