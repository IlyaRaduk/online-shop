export type typeOfCare = 'body'| 'hands' | 'feet'| 'face' | 'hair' | 'tan' | 'shaving' | 'present' | 'hygiene' | 'oral' |'paper';

export interface IFilterItem {
    value:string;
    type:typeOfCare;
}

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

export interface IProductWithCount extends IProduct {
    count: number,
}