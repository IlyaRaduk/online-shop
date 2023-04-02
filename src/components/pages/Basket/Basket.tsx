import { FC } from 'react';
import style from './Basket.module.scss';
import { IProduct } from '../../../models/IProduct';
import BasketItem from './BasketItem/BasketItem';
import Button from '../../common/Button/Button';

const products: IProduct[] = [
  {
    url: 'https://content2.onliner.by/catalog/device/header/7030b0bba410041d01c7a40fa3744d78.jpeg',
    name: 'каневая маска с экстрактом бамбука The Fresh Mask Sheet Bamboo',
    type: 'bottle',
    size: '20 мл',
    barcode: 1,
    manufacturer: 'Нэфис',
    brend: 'It’s Skin',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
    price: 38,
    typeOfCare: ['body'],
  },
  {
    url: 'https://content2.onliner.by/catalog/device/header/02839a62b0373bef0cae0e2c3d95cfa8.jpeg',
    name: 'тканевая маска с молочными протеинами и зелёным чаем ',
    type: 'bag',
    size: '21 гр',
    barcode: 2,
    manufacturer: 'Мила',
    brend: 'APieu',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
    price: 11,
    typeOfCare: ['hands'],
  },
  {
    url: 'https://content2.onliner.by/catalog/device/header/9dc56a8045078bd9b35ca2e9c5e80578.jpeg',
    name: ' патчи под глаза Гидрогелевые с 24-каратным коллоидным золотом',
    type: 'bag',
    size: '25 гр',
    barcode: 3,
    manufacturer: 'Мила',
    brend: 'Petitfee',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
    price: 58,
    typeOfCare: ['body','hands']
  },
]

const Basket: FC = () => {
  return (
    <div className={style.basket}>
      <p className={style.basket__title}>
        Корзина
      </p>
      {
        products.map((el, index) => <div className={style.product} key={index}> <BasketItem product={el} /></div>)
      }
      <div className={style.basket__order}>
        <div className={style.basket__btn}>
          <Button size='big' text='Оформить заказ' img=''/>
        </div>
        <div className={style.basket__price}>
          48,87 {' ' + '₸'}
        </div>
      </div>
    </div>
  )
}
export default Basket;
