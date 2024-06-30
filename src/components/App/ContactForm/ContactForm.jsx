import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import { nanoid } from 'nanoid';
import * as Yup from "yup";
import css from './ContactForm.module.css'

export default function ContactForm({onAdd}) {
    const nameId = useId();
    const numberId = useId();
    const hadleSabmit = (value, action) => {
        onAdd({
            id: nanoid(),
            name: value.name,
            number: value.number,
        })
        action.resetForm()
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
        .min(3, 'Too Short!')
            .max(50, 'Too Long!')
        .required(),
        number: Yup.string()
            .min(3, 'Too Short!')
            .max(50, 'Too Long!')
        .required(),
    })

    return <Formik initialValues={{
        name: '',
        number: '',
    }}
        validationSchema={SignupSchema}
        onSubmit={hadleSabmit}>
        <Form className={css.container}>
            <div className={css.wrapper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" id={nameId}></Field>
                <ErrorMessage name="name" component="span" className={ css.message}/>
        
            <label htmlFor={numberId}>Number</label>
            <Field type="text" name="number" id={numberId}></Field>
                <ErrorMessage name="number" component="span" className={ css.message} />
            </div>
                <button type="submit">Add contact</button>
             
        </Form>
    </Formik>
}