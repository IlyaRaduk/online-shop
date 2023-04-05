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

export const filterItems: IFilterItem[] = [{ type: 'body', value: 'Уход за телом' }, { type: 'hands', value: 'Уход за руками' },
{ type: 'feet', value: 'Уход за ногами' }, { type: 'face', value: 'Уход за лицом' },
{ type: 'hair', value: 'Уход за волосами' }, { type: 'tan', value: 'Средства для загара' },
{ type: 'shaving', value: 'Средства для бритья' }, { type: 'present', value: 'Подарочные наборы' },
{ type: 'hygiene', value: 'Гигиеническая продукция' }, { type: 'oral', value: 'Гигиена полости рта' },
{ type: 'paper', value: 'Бумажная продукция' }]