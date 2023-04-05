import style from './ModalCreateProduct.module.scss';
import { FC } from "react";
import { useAppSelector, useAppDisaptch } from '../../../../../hooks/redux';
import { modalCreateProductSlice } from '../../../../../store/reducers/modalCreateProductSlice';
import { filterItems } from '../../../../../models/Interface';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import addProduct from '../../../../../store/thunkCreators/addProduct';
import { IProduct } from '../../../../../models/Interface';
import editProduct from '../../../../../store/thunkCreators/editProduct';


const ModalCreateProduct: FC = () => {
    const { isModalCreateProduct, type, productEdit } = useAppSelector((state => state.modalCreateProductSlice));
    const { currentPage, sort } = useAppSelector((state => state.catalogSlice));
    const dispatch = useAppDisaptch();

    const rootClasses = [style.modal];
    if (isModalCreateProduct) {
        rootClasses.push(style.active)
    }

    interface MyFormValues {
        name: string,
        url: string,
        manufacturer: string,
        brend: string,
        description: string,
        price: string,
        type: 'bag' | 'bottle',
        size: string,
    }
    let initialValues: MyFormValues = {
        name: '',
        url: '',
        manufacturer: '',
        brend: '',
        description: '',
        price: '',
        type: 'bag',
        size: '',
    };

    if (type === 'edit') {
        if (productEdit) {
            initialValues = {
                name: productEdit.name,
                url: productEdit.url,
                manufacturer: productEdit.manufacturer,
                brend: productEdit.brend,
                description: productEdit.description,
                price: String(productEdit.price),
                type: productEdit.type,
                size: String(parseInt(productEdit.size)),
            }
        }
    }


    return (
        <div className={rootClasses.join(' ')} onClick={() => dispatch(modalCreateProductSlice.actions.offModalCreateProduct())}>
            <div className={style.modal__content} onClick={(e) => e.stopPropagation()}>
                {
                    type === 'add' ? <div className={style.modal__title}>
                        Добавьте товар
                    </div>
                        : <div className={style.modal__title}>
                            Измените товар
                        </div>
                }

                <Formik
                    initialValues={initialValues}
                    validate={values => {
                        const errors: any = {};
                        if (!values.name) {
                            errors.name = 'Необходимо заполнить имя';
                        }
                        if (!values.url) {
                            errors.url = 'Необходимо вставить url картинки';
                        }
                        if (!values.manufacturer) {
                            errors.manufacturer = 'Необходимо ввести производителя';
                        }
                        if (!values.brend) {
                            errors.brend = 'Необходимо ввести бренд';
                        }
                        if (!values.description) {
                            errors.description = 'Необходимо ввести описание';
                        }
                        if (!Number(values.price)) {
                            errors.price = 'Необходимо ввести число';
                        }
                        if (!Number(values.size)) {
                            errors.size = 'Необходимо ввести число';
                        }
                        return errors;
                    }}

                    onSubmit={type === 'add' ? (values, { setSubmitting }) => {
                        let size = ''
                        if (values.type === 'bag') {
                            size = values.size + 'г'
                        }
                        else {
                            size = values.size + 'мл'
                        }
                        dispatch(addProduct({
                            url: values.url,
                            name: values.name,
                            type: values.type,
                            size: size,
                            barcode: Date.now(),
                            manufacturer: values.manufacturer,
                            brend: values.brend,
                            description: values.description,
                            price: Number(values.price),
                            typeOfCare: ['oral'],
                        }, currentPage, sort));
                        setSubmitting(false);
                    } : (values, { setSubmitting }) => {
                        let size = ''
                        if (values.type === 'bag') {
                            size = values.size + 'г'
                        }
                        else {
                            size = values.size + 'мл'
                        }
                        if (productEdit) {
                            dispatch(editProduct({
                                url: values.url,
                                name: values.name,
                                type: values.type,
                                size: size,
                                barcode: productEdit?.barcode,
                                manufacturer: values.manufacturer,
                                brend: values.brend,
                                description: values.description,
                                price: Number(values.price),
                                typeOfCare: ['oral'],
                            }, currentPage, sort));
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting, values }) => (
                        <Form className={style.form}>
                            <Field className={style.modal__inputElement} type="text" name="name" placeholder='Имя товара:' />
                            <ErrorMessage className={style.modal__error} name="name" component="div" />

                            <Field className={style.modal__inputElement} type="text" name="url" placeholder='Url картинки:' />
                            <ErrorMessage className={style.modal__error} name="url" component="div" />

                            <Field className={style.modal__inputElement} type="text" name="manufacturer" placeholder='Производиль:' />
                            <ErrorMessage className={style.modal__error} name="manufacturer" component="div" />

                            <Field className={style.modal__inputElement} type="text" name="brend" placeholder='Бренд:' />
                            <ErrorMessage className={style.modal__error} name="brend" component="div" />

                            <Field className={style.modal__inputElement} type="text" name="description" placeholder='Описание:' />
                            <ErrorMessage className={style.modal__error} name="description" component="div" />

                            <Field className={style.modal__inputElement} type="text" name="price" placeholder='Цена:' />
                            <ErrorMessage className={style.modal__error} name="price" component="div" />

                            <div className={style.modal__type}>
                                <p>Выберите тару:</p>
                                <label>
                                    <Field type="radio" name="type" value="bag" />
                                    Упаковка
                                </label>
                                <label>
                                    <Field type="radio" name="type" value="bottle" />
                                    Бутылка
                                </label>
                            </div>
                            {values.type == 'bag' ?
                                <Field className={style.modal__inputElement} type="text" name="size" placeholder='Введите вес в граммах:' />
                                :
                                <Field className={style.modal__inputElement} type="text" name="size" placeholder='Введите объём в миллилитрах:' />
                            }
                            <ErrorMessage className={style.modal__error} name="size" component="div" />

                            <button className={style.modal__submit} type="submit" disabled={isSubmitting}>
                                Отправить
                            </button>
                        </Form>
                    )}
                </Formik>

            </div>
        </div>

    )
}
export default ModalCreateProduct;