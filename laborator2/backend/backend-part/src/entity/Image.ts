import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Image {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imageName: string;

    @Column()
    url: string;

}
