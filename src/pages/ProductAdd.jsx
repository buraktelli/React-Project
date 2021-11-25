import { Field, Form, Formik, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { Button, FormField, Label } from 'semantic-ui-react'
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

export default function ProductAdd() {

    const initialValues = {
        productName: '',
        unitPrice: 10
    }
    const schema = Yup.object({
        productName: Yup.string().required('Urun adi zorunlu'),
        unitPrice: Yup.number().required('Urun fiyati zorunlu')
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                // console.log(values);
            }}
        >
            <Form className="ui form">
                <KodlamaIoTextInput name="productName" placeholder="Urun Adi" />
                <KodlamaIoTextInput name="unitPrice" placeholder="Urun Fiyati" />
                {/* <FormField>
                    <Field name="productName"></Field>
                    <ErrorMessage name="productName" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }>

                    </ErrorMessage>
                </FormField>
                <FormField>
                    <Field name="unitPrice"></Field>
                    <ErrorMessage name="unitPrice" render={error =>
                        <Label pointing basic color="red" content={error}></Label>
                    }>

                    </ErrorMessage>
                </FormField> */}
                <Button color="green" type="submit">Ekle</Button>
            </Form>
        </Formik>
    )
}
