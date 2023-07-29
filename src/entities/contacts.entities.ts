import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entities";

@Entity("contacts")
class Contact{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 125})
    name:string

    @Column({type: 'varchar', length: 125, nullable: true})
    email: string | null | undefined

    @Column({type: 'varchar', length: 25, nullable: true})
    cellphone?: string | null | undefined

    @CreateDateColumn()
    createdAt?: string|Date

    @ManyToOne(() => User)
    user: User
};

export {Contact};