import Head from "../component/head";
import Isi from "../component/isi"
import Contact from "../component/contact";
import Portofolio from "../component/portofolio";
import { Link } from 'react-scroll'
function Home() {
    return (
        <div>
            <Head />
            <Isi />
            <Portofolio />
            <Contact />
        </div >
    );
}

export default Home;