export class Foods {
  id!: number;
  price!: number;
  name!: string;
  favorite: boolean = false;
  star: number = 0;
  tags!: string[];
  imageUrl!: string;
  cookTimes!: string;
  origin!: string[];
  addedToCart: boolean=true;
  addedCount!:number;
}
