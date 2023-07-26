import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, BeforeInsert } from "typeorm";
import { Contact } from "./contacts.entities";

@Entity("users")
class User{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: 'varchar', length: 125})
    name:string

    @Column({type: 'varchar', length: 125, unique: true})
    email: string

    @Column({type: 'varchar', length: 125})
    password: string

    @Column({type: 'varchar', length: 25, nullable: true})
    cellphone?: string | null | undefined

    @CreateDateColumn()
    createdAt?: string|Date

    @OneToMany(()=>Contact,(contact) => contact.user)
    contacts: Contact[]

    @BeforeInsert()
    transformNameUpperEmailLower() {
        this.email = this.email.toLowerCase()
        this.name = this.name.toUpperCase()
    }

}

export {User}