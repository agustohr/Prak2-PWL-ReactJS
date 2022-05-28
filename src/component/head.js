import React from 'react';
import bg from '../assets/bg.jpg';
import picprof from '../assets/picprof.png'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'
const styles = createUseStyles({
    nama: {
        color: 'white',
    },
    bungkus: {
        alignItems: 'center',
        textAlign: 'center',
        margin: {
            left: 350,
            right: 350,
        },
        padding: {
            top: 50
        }
    },
    latar: {
        margin: {
            // top: -30
        },
        padding: {
            bottom: 100
        },

        backgroundSize: "cover",
    },
    prof: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    deskripsi: {
        color: 'white',
        fontSize: 20
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
        justifyContent: 'space-between'
    }

});
function Head() {
    const classes = styles()
    return (
        <div className={classes.latar} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', }} >
            
            <div id="about" className={classes.bungkus}>

                <img src={picprof} alt="prof" className={classes.prof} />;
                <h1 className={classes.nama}>Agusto Hawlai Rajagukguk</h1>
                <p className={classes.deskripsi}>I am a 6th semester student of informatics engineering at the Institute Technology of Sumatera. I was born in Tebing Tinggi on August 3, 2001.</p>
            </div>
        </div >
    )
}


export default Head

