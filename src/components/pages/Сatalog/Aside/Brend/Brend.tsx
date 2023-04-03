import style from './Brend.module.scss';
import { FC, useState } from "react";
import Input from '../../../../common/Input/Input';
import img_search from './../../../../../assets/img/search.svg';
import img_sort from './../../../../../assets/img/sort.svg';
import { useAppDisaptch, useAppSelector } from '../../../../../hooks/redux';
import { catalogSlice } from '../../../../../store/reducers/catalogSlice';

const Brend: FC = () => {
    const [visibleItems, setVisibleItems] = useState(4);
    const [showAll, setShowAll] = useState(false);

    const { brendsList, filterBrends, searchBrends } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    const handleShowAllClick = () => {
        setShowAll(!showAll);
        setVisibleItems(showAll ? 5 : brendsList.length);
    };

    const handleSearchChange = (value: string) => {
        dispatch(catalogSlice.actions.setSearchBrends(value));
    }

    const filteredBrands = brendsList.filter((brand) =>
        brand.toLowerCase().includes(searchBrends.toLowerCase())
    );

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target;
        dispatch(catalogSlice.actions.setFilterBrends(name))
    };

    return (
        <div className={style.brend}>
            <p className={style.brend__title}>
                Бренд
            </p>
            <Input handleChange={handleSearchChange} placeholder='Поиск...' value={searchBrends} img={img_search} />
            <div className={style.brend__list}>
                {filteredBrands.slice(0, visibleItems).map((brend, index) => <div key={index} className={style.brend__item}>
                    <input onChange={handleFilterChange} checked={!!filterBrends.includes(brend)} id={brend} name={brend} type="checkbox" />
                    <label htmlFor={brend}>{brend}</label>
                </div>)}
                <div onClick={handleShowAllClick} className={style.brend__show}>
                    <span>Показать всё</span>
                    <img className={style.brend__img} src={img_sort} alt="" />
                </div>
            </div>

        </div>
    )
}
export default Brend;