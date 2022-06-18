export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  readonly amount: number;
  readonly collected: number;
  readonly region: string;
  readonly date: Date;
  readonly user_id: string;
}