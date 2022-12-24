import { useFormik } from 'formik'
import * as Yup from 'yup';
import React from 'react'

const initialValues = {
    name: 'Prateek',
    email: '',
    channel: '',
};

const onSubmit = values => {
    console.log('Form', values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email('Invalid email format').required('Required'),
    channel: Yup.string().required('Required')
})

const YoutubeForm = () => {
    //hook takes in obj as param , it will return the obj with some method and properties for us
    // initialValues will take the initial state values
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    console.log(formik.touched, 'vaessss');
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type='text' 
                        id='name' 
                        name='name' 
                        // onChange={formik.handleChange} 
                        // value={formik.values.name} 
                        // onBlur={formik.handleBlur} 
                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name && <div className='error'>{formik.errors.name}</div>}
                </div>
                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='text' 
                        id='email' 
                        name='email' 
                        // onChange={formik.handleChange} 
                        // value={formik.values.email}  
                        // onBlur={formik.handleBlur} 
                        {...formik.getFieldProps('email')} 
                          //getfield props provide all the props of the input
                    />
                    {formik.errors.email && formik.touched.email && <div className='error'>{formik.errors.email}</div>}
                </div>

                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        // onChange={formik.handleChange} 
                        // value={formik.values.channel}  
                        // onBlur={formik.handleBlur} 
                        {...formik.getFieldProps('channel')}

                    />                    
                    {formik.errors.channel && formik.touched.channel && <div className='error'>{formik.errors.channel}</div>}
                </div>

                <button onClick={formik.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm