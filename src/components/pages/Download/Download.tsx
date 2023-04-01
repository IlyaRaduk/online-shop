import { FC, useEffect } from "react";
import { useAppDisaptch, useAppSelector } from '../../../hooks/redux';
import fetchProducts from '../../../store/thunkCreators/fetchProducts';
import { useNavigate } from "react-router-dom";

const Download: FC = () => {
    const { isLoading } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            {isLoading ? <div>Загрузка...</div> :
                navigate(`/catalog`)
            }
        </>
    )
}
export default Download;