import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss';
import { Routes, Route, Link, } from "react-router-dom"
import Deskripsi from '../pages/deskripsi';

const Portofolio = () => {
    const [daftar, setDaftar] = useState([]);

    useEffect(() => {
        async function getDaftar() {
            const response = await fetch("https://server-agustohawlai.herokuapp.com/api/projects");
            const json = await response.json();
            setDaftar(json.data)
        }
        getDaftar()
    }, []);

    const classes = styles();

    return (
        <div id="portofolio" className={classes.wrapbig}>
            <h2 className={classes.title}>PORTOFOLIO</h2>
            <div className={classes.baris}>
                {daftar.map((item, index) => (
                    <div key={index} className={classes.kolom}>
                        <h4>Project {index + 1}</h4>
                        <div>
                            <img className={classes.gambar} src={item.image} />
                        </div>
                        <hr></hr>
                        <p>{item.nama}</p>
                        <Link style={{ textDecoration: 'none', color: '#0f83db' }} to={`/deskripsi/${item.id}`}><b>Detail</b></Link>

                    </div>
                ))}
            </div>

        </div >
    )
}
const styles = createUseStyles({
    baris: {
        // flexDirection: 'row',
        display: 'flex',
        // justifyContent: 'space-between',
        margin: {
            left: 50,
            right: 50
        },
        flexWrap: 'wrap'
    },
    wrapbig: {
        padding: {
            left: 80,
            right: 80,
            top: 5
        },
        backgroundColor: '#e6e6e6'
    },
    gambar: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,

    },
    kolom: {

        padding: {
            left: 20,
            right: 20
        },
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        "&:hover": {
            background: "#efefef",
            padding: {
                left: 24,
                right: 20
            },
        },
        margin: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        },
        maxWidth: 300,
        minHeight: 400
    },
    title: {
        textAlign: 'center'
    }
});
export default Portofolio
