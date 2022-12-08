import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class blogs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  title: string;

  @Column({ type: "varchar" })
  content: string;
}
