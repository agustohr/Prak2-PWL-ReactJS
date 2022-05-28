import React from 'react'
import { createUseStyles } from 'react-jss';
import Progress_bar from './ProgressBar';
// import { Link } from 'react-scroll'
const styles = createUseStyles({
    wrapIsi: {
        margin: {
            left: 100,
            right: 100,
            bottom: 20
        },
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        width: '40%',
    },
    box2: {
        width: '40%',
    },
    nama: {
        fontSize: 16,
        fontWeight: '500'
    },
    title: {
        textAlign: 'center'
    }

});

function Isi() {
    const classes = styles();
    return (
        <div>
            <h2 className={classes.title}>SKILLS</h2>
            <div id="skill" className={classes.wrapIsi}>

                <div className={classes.box1}>

                    <div className={classes.nama}>
                        <p>Frontend</p>
                        <Progress_bar bgcolor="lightblue" progress='80' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>Backend</p>
                        <Progress_bar bgcolor="lightblue" progress='60' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>UI/UX</p>
                        <Progress_bar bgcolor="lightblue" progress='70' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>Database</p>
                        <Progress_bar bgcolor="lightblue" progress='60' height={30} />
                    </div>
                </div>

                <div className={classes.box2}>
                    <div className={classes.nama}>
                        <p>Data Analyst</p>
                        <Progress_bar bgcolor="lightblue" progress='70' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>Photography</p>
                        <Progress_bar bgcolor="lightblue" progress='65' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>Video Editing</p>
                        <Progress_bar bgcolor="lightblue" progress='45' height={30} />
                    </div>
                    <div className={classes.nama}>
                        <p>Documentation</p>
                        <Progress_bar bgcolor="lightblue" progress='50' height={30} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Isi