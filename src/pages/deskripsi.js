import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import bg from '../assets/bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import Swal from 'sweetalert2';

function Deskripsi() {
    const classes = styles()
    const { id } = useParams()
    // console.log(id)
    const [daftar, setDaftar] = useState([]);
    const navigate = useNavigate();
    const [nama, setNama] = useState("")
    const [komentar, setKomentar] = useState("")
    const [listKomen, setListKomen] = useState([])
    const [validationError, setValidationError] = useState({})
    const addKomen = async (e) => {
        e.preventDefault();

        const formData = new FormData()

        formData.append('nama', nama)
        formData.append('komentar', komentar)
        formData.append('project_id', id)


        await axios.post(`https://server-agustohawlai.herokuapp.com/api/komen`, formData).then(({ data }) => {
            Swal.fire({
                icon: "success",
                text: data.message
            })
            navigate(`/`)
        }).catch(({ response }) => {
            if (response.status === 422) {
                setValidationError(response.data.errors)
            } else {
                Swal.fire({
                    text: response.data.message,
                    icon: "error"
                })
            }
        })
    }

    useEffect(() => {
        async function getDaftar() {
            const response = await fetch(`https://server-agustohawlai.herokuapp.com/api/projects/${id}`);
            const json = await response.json();
            setDaftar(json.data)
        }
        async function getKomentar() {
            const response = await fetch(`https://server-agustohawlai.herokuapp.com/api/list-komen/${id}`);
            const json = await response.json();
            setListKomen(json.data)
        }
        getDaftar()
        getKomentar()
    }, []);
    console.log(listKomen)
    return (
        <div className={classes.latar}  >
            
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1 style={{ color: '#0f83db', textAlign: 'center' }}>Deskripsi</h1>
                    <hr></hr>
                    <br></br>

                    <div >
                        {daftar.map((item, index) => (
                            <div key={index}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img className={classes.gambar} src={item.image} />
                                </div>
                                <hr style={{ width: '60%' }}></hr>
                                <p>{item.nama}</p>

                                <hr></hr>
                                <h3 style={{ color: '#0f83db' }}>Komentar</h3>
                                {listKomen.map((item, index) => (
                                    <div key={index}>
                                        <b> {item.nama}</b>
                                        <p>{item.komentar}</p>
                                        <u>Waktu: {item.created_at}</u>
                                        <hr></hr>
                                    </div>

                                ))}
                                <Form onSubmit={addKomen}>
                                    <Row>
                                        <Col>
                                            <Form.Group controlId="Name">
                                                <Form.Label > <strong>Nama</strong></Form.Label>
                                                <br></br>
                                                <Form.Control className={classes.namaForm} type="text" value={nama} onChange={(event) => {
                                                    setNama(event.target.value)
                                                }} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <Col>
                                            <Form.Group controlId="Description">
                                                <Form.Label> <strong>Komentar</strong></Form.Label>
                                                <br></br>
                                                <Form.Control className={classes.komenForm} as="textarea" rows={3} value={komentar} onChange={(event) => {
                                                    setKomentar(event.target.value)
                                                }} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Button className={classes.btn} type="submit">
                                        Save
                                    </Button>
                                </Form>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    )
}

const styles = createUseStyles({
    latar: {
        margin: {
            // top: -30
        },
        padding: {
            bottom: 100
        },
        backgroundColor: 'white',
        backgroundSize: "cover",

    },
    namaForm: {
        width: '50%',
        height: 20
    },
    komenForm: {
        width: '100%',
        height: 150
    },
    btn: {
        backgroundColor: '#0f83db',
        padding: {
            left: 15,
            right: 15,
            top: 10,
            bottom: 10,
        },
        color: 'white',
        border: {
            radius: 8,
            color: 'white'
        },
    },

    navbar: {
        backgroundColor: 'white',
        height: 40,
        fontWeight: '500',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,


    },
    subnav: {
        display: 'inline',
        "&:hover": {
            background: "#efefef",
            padding: 3,
            borderRadius: 10
        },


    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    card: {
        backgroundColor: 'white',
        margin: 20
    },
    content: {
        margin: {
            left: '10%',
            right: '10%'
        },
        padding: 40,
        alignItems: 'center',
        border: {
            color: '#eeeee4',
            width: 1,
            style: 'solid',
            radius: 10
        },
        boxShadow: "1px 3px 1px #9E9E9E",
        minHeight: 600

        // flex: 1,
        // justifyContent: 'center'
    },
    gambar: {
        width: '60%',
        height: '60%',

        // alignSelf: 'center'
    }

});

export default Deskripsi
