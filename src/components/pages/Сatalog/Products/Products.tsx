import style from './Products.module.scss';
import { FC } from "react";
import { IProduct } from './../../../../models/IProduct';
import ProductItem from './ProductItem/ProductItem';
import img_left from './../../../../assets/img/left.svg';
import img_right from './../../../../assets/img/right.svg';

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
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/9dc56a8045078bd9b35ca2e9c5e80578.jpeg',
        name: 'патчи под глаза Гидрогелевые с 24-каратным коллоидным золотом',
        type: 'bag',
        size: '25 гр',
        barcode: 3,
        manufacturer: 'Мила',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 58,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/2e1550b894bd5f4a6716e507b281cdbf.jpeg',
        name: 'крем для лица для сияния кожи с Витамином С Vitamin-C Power Radiance',
        type: 'bottle',
        size: '50 гр',
        barcode: 4,
        manufacturer: 'Нэфис',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 98,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/7030b0bba410041d01c7a40fa3744d78.jpeg',
        name: 'каневая маска с экстрактом бамбука The Fresh Mask Sheet Bamboo',
        type: 'bottle',
        size: '20 мл',
        barcode: 5,
        manufacturer: 'Нэфис',
        brend: 'It’s Skin',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 38,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/02839a62b0373bef0cae0e2c3d95cfa8.jpeg',
        name: 'тканевая маска с молочными протеинами и зелёным чаем ',
        type: 'bag',
        size: '21 гр',
        barcode: 6,
        manufacturer: 'Мила',
        brend: 'APieu',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 11,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/9dc56a8045078bd9b35ca2e9c5e80578.jpeg',
        name: 'патчи под глаза Гидрогелевые с 24-каратным коллоидным золотом',
        type: 'bag',
        size: '25 гр',
        barcode: 7,
        manufacturer: 'Мила',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 58,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/2e1550b894bd5f4a6716e507b281cdbf.jpeg',
        name: 'крем для лица для сияния кожи с Витамином С Vitamin-C Power Radiance',
        type: 'bottle',
        size: '50 гр',
        barcode: 8,
        manufacturer: 'Нэфис',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 98,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/7030b0bba410041d01c7a40fa3744d78.jpeg',
        name: 'каневая маска с экстрактом бамбука The Fresh Mask Sheet Bamboo',
        type: 'bottle',
        size: '20 мл',
        barcode: 9,
        manufacturer: 'Нэфис',
        brend: 'It’s Skin',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 38,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/02839a62b0373bef0cae0e2c3d95cfa8.jpeg',
        name: 'тканевая маска с молочными протеинами и зелёным чаем ',
        type: 'bag',
        size: '21 гр',
        barcode: 10,
        manufacturer: 'Мила',
        brend: 'APieu',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 11,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/9dc56a8045078bd9b35ca2e9c5e80578.jpeg',
        name: 'патчи под глаза Гидрогелевые с 24-каратным коллоидным золотом',
        type: 'bag',
        size: '25 гр',
        barcode: 11,
        manufacturer: 'Мила',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 58,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/2e1550b894bd5f4a6716e507b281cdbf.jpeg',
        name: 'крем для лица для сияния кожи с Витамином С Vitamin-C Power Radiance',
        type: 'bottle',
        size: '50 гр',
        barcode: 12,
        manufacturer: 'Нэфис',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 98,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/7030b0bba410041d01c7a40fa3744d78.jpeg',
        name: 'каневая маска с экстрактом бамбука The Fresh Mask Sheet Bamboo',
        type: 'bottle',
        size: '20 мл',
        barcode: 13,
        manufacturer: 'Нэфис',
        brend: 'It’s Skin',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 38,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/02839a62b0373bef0cae0e2c3d95cfa8.jpeg',
        name: 'тканевая маска с молочными протеинами и зелёным чаем ',
        type: 'bag',
        size: '21 гр',
        barcode: 14,
        manufacturer: 'Мила',
        brend: 'APieu',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 11,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/9dc56a8045078bd9b35ca2e9c5e80578.jpeg',
        name: 'патчи под глаза Гидрогелевые с 24-каратным коллоидным золотом',
        type: 'bag',
        size: '25 гр',
        barcode: 15,
        manufacturer: 'Мила',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 58,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/2e1550b894bd5f4a6716e507b281cdbf.jpeg',
        name: 'крем для лица для сияния кожи с Витамином С Vitamin-C Power Radiance',
        type: 'bottle',
        size: '50 гр',
        barcode: 16,
        manufacturer: 'Нэфис',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 98,
    },
    {
        url: 'https://content2.onliner.by/catalog/device/header/9dc56a8045078bd9b35ca2e9c5e80578.jpeg',
        name: 'патчи под глаза Гидрогелевые с 24-каратным коллоидным золотом',
        type: 'bag',
        size: '25 гр',
        barcode: 17,
        manufacturer: 'Мила',
        brend: 'Petitfee',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit aut commodi et asperiores quos aliquam maiores. Impedit ducimus placeat repellat natus nisi quidem tenetur saepe maxime qui quam, dolores in.',
        price: 58,
    },
]



const Products: FC = () => {
    return (
        <>
            <div className={style.products}>
                {
                    products.map((el, index) => <div className={style.product} key={index}> <ProductItem product={el} /></div>)
                }
                <div>
                    <div className={style.pages}>
                        <div className={style.pages__left}>
                            <img src={img_left} alt="left" />
                        </div>
                        <div className={style.pages__list}>
                            <div className={[style.pages__item, style.active].join(' ')}>
                                1
                            </div>
                            <div className={style.pages__item}>
                                2
                            </div>
                            <div className={style.pages__item}>
                                3
                            </div>
                        </div>
                        <div className={style.pages__right}>
                            <img src={img_right} alt="right" />
                        </div>
                    </div>
                    <div className={style.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                        Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur
                        aliquet sed pellentesque consequat consectetur congue mauris venenatis.
                        Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                    </div>
                </div>
            </div>

        </>
    )
}
export default Products;