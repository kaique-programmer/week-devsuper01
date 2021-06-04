/* eslint-disable no-use-before-define */
export type Order = {
  id: number,
  address: string,
  latitude: number,
  longitude: number,
  moment: string,
  status: string,
  products: Product[],
  total: number,
}

export type Product = {
  id: number,
  name: string,
  description: string,
  imageUri: string,
  price: number,
}
