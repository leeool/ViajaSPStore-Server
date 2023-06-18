import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
import TripPackage from "./tripPackage"
import Accommodation from "./accommodation"
import Category from "./category"

@Entity("cities")
class City {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "varchar", length: 100 })
  name: string

  @Column({ type: "char", length: 2, default: "SP" })
  state: string

  @Column({ type: "varchar" })
  attractions: string[]

  @Column({ type: "text" })
  about: string

  @OneToMany(() => City, (city) => city.tripPackages)
  tripPackages: TripPackage[]

  @ManyToMany(() => Category, (category) => category.cities)
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  categories: Category[]
}

export default City
