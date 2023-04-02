type typeOfCare = 'body'| 'hands';

export interface IProduct {
    url: string,
    name: string,
    type: 'bottle'|'bag',
    size: string,
    barcode: number,
    manufacturer: string,
    brend: string,
    description: string,
    price:number,
    typeOfCare: typeOfCare[];
}