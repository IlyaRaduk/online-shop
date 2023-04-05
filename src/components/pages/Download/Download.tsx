import { FC, useEffect } from "react";
import { useAppDisaptch, useAppSelector } from '../../../hooks/redux';
import { useNavigate } from "react-router-dom";
import fetchInitProducts from "../../../store/thunkCreators/fetchInitProducts";

const Download: FC = () => {
    const { products } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();
    const navigate = useNavigate();

    useEffect(() => {
        const load = async  ()=> {
            await dispatch(fetchInitProducts());
            navigate(`online-shop/catalog`);
        };
        load();
    }, [])

    return (
        <>
            {products.length===0 ? <div>Загрузка...</div> :
            null
            }
        </>
    )
}
export default Download;