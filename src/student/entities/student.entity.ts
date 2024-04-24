import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'students'})
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column({type: 'boolean', default: true})
    active: boolean;
}
