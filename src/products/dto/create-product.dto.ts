export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly user_info: ProductUsersData;
}

export class ProductUsersData {
  readonly _id: string;
  readonly name: string;
  readonly email: string;
}