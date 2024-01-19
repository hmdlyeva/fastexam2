import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import { AddData, delData, fetchUserById } from '../../redux/slice/slice'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Input } from '@mui/material';
import { Helmet } from "react-helmet";
import Navbar from '../../components/navbar/Navbar';
import './add.scss'
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    detail: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    price: Yup.string().required('Required'),
});
const Add = () => {
    const products = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserById())
    }, [])

    const [inpval, setinpval] = useState('')

    let searched = products.filter((p) => p.name.toLowerCase().includes(inpval))
    return (
        <div id='add_pg'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="nav">
                <Navbar />
            </div>
            <div className="container">
                <div className="form">

                    <Formik
                        initialValues={{
                            name: '',
                            detail: '',
                            price: 0,
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={values => {
                            console.log(values);
                            dispatch(AddData(values))
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='formum'>
                                <Input name="name" />
                                {errors.name && touched.name ? (
                                    <div>{errors.name}</div>
                                ) : null}
                                <Input name="detail" />
                                {errors.detail && touched.detail ? (
                                    <div>{errors.detail}</div>
                                ) : null}
                                <Input name="price" type='number' />
                                {errors.price && touched.price ? <div>{errors.price}</div> : null}
                                <Button type="submit">Add</Button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className="table">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell >ID</TableCell>
                                    <TableCell>name</TableCell>
                                    <TableCell align="left">detail</TableCell>
                                    <TableCell align="left">price</TableCell>
                                    <TableCell align="left">delete</TableCell>
                                    <TableCell align="left"><Input type='text' placeholder='Search' onChange={(e) => {
                                        setinpval(e.target.value)
                                    }} /></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {searched ? searched.map((p) => (
                                    <TableRow
                                        key={p._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">{p._id}</TableCell>
                                        <TableCell align="left">
                                            {p.name}
                                        </TableCell>
                                        <TableCell align="left">{p.detail}</TableCell>
                                        <TableCell align="left">{p.price}</TableCell>
                                        <TableCell align="left"><Button onClick={() => {
                                            dispatch(delData(p._id))
                                        }}>Delete</Button></TableCell>
                                    </TableRow>
                                )) :


                                    products.map((p) => (
                                        <TableRow
                                            key={p._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">{p._id}</TableCell>
                                            <TableCell align="left">
                                                {p.name}
                                            </TableCell>
                                            <TableCell align="left">{p.detail}</TableCell>
                                            <TableCell align="left">{p.price}</TableCell>
                                            <TableCell align="left"><Button onClick={() => {
                                                dispatch(delData(p._id))
                                            }}>Delete</Button></TableCell>
                                        </TableRow>
                                    ))

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

        </div>
    )
}

export default Add